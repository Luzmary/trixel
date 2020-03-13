import React, {Component} from "react"; 
import axios from "axios";
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { CustomHeader } from '../index'

export class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataList: [],
      time: "",
      name: "",
      isFetching : false,
      value: true,
    }
    
  }

  componentDidMount() {
    this.refreshDataList();
    if (this.props.route.params){
      //console.log(this.props.route.params);
      let task = this.props.route.params.name;
      this.createTask(task);
    }
  }

  refreshDataList () {
    axios
    .get("https://to-do-list-lo.herokuapp.com/api/todolists/")
    .then(res => this.setState({ isLoading: false, dataList: res.data }))
    .catch(err => console.log(err));
  }

  onRefresh() {
    this.setState({ isLoading: false }, function() { this.refreshDataList() });
 }

  createTask (name) {

    const task = { 
      name: name, 
      description: name, 
      status: false 
    };

    axios.post('https://to-do-list-lo.herokuapp.com/api/todolists/', task)
    .then(this.onRefresh());
    
  }

  editTask (item) {
      const task = {
          name: item.name, 
          description: item.name, 
          status: true 
      }
      axios.put(`https://to-do-list-lo.herokuapp.com/api/todolists/${item.id}/`, task)
      .then(this.onRefresh());

      alert("Task completed! well done...");
  }

  deleteTask (item) {
    axios
      .delete(`https://to-do-list-lo.herokuapp.com/api/todolists/${item.id}`)
      .then(res => this.refreshDataList());
  }

  renderItemView = ({item, index}) => {
    return (
      <View style={styles.item}>
        <Text onPress={() => this.editTask(item)} style={ styles.title, item.status ? {textDecorationLine: 'line-through'} : ""  }>{'\u2609'} {item.name} </Text>
        
        <TouchableOpacity onPress={() => this.deleteTask(item)} style={styles.noteDelete}>
          <Image style={{width:20, height:20, marginLeft: 50}}
              source={require('../images/trash.png')}
              resizeMode="contain"
          />
          </TouchableOpacity>
      </View>
    )
  }

  

  render() {
    let {container} = styles
    let {dataList, isLoading} = this.state


    return (

        <SafeAreaView style={{flex : 1}}>
          <CustomHeader title="Home" isHome={true} navegation={this.props.navigation} />
          <TouchableOpacity
              style={{marginTop:20, alignItems: 'center'}}
              onPress={() => this.props.navigation.navigate('HomeDetail')} 
            >
          <Text style={{ fontSize:20, color:'gray', fontWeight:"bold"}}>+ Create new task</Text>
          
          </TouchableOpacity>
          {
            isLoading?
              <View style={styles.container}>
                <ActivityIndicator size="large" animating/>
              </View>              
          : 
            <View style={container}>
            <FlatList
                data={dataList}
                renderItem={ this.renderItemView}
                keyExtractor={(item, index) => index.toString()}
                refreshing = {this.state.isFetching}
                onRefresh = {() => this.onRefresh()}
              />           
          </View>
          }
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    marginVertical: 8,
    flex: 1
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  }
})