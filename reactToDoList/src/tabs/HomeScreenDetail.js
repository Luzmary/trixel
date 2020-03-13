import React, {Component} from "react"; 
import { TextInput, View, SafeAreaView, Button, StyleSheet, Text} from 'react-native';
import { CustomHeader } from '../index'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


export class HomeScreenDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      time: "",

    }
  }

  render() {
    
    return (
      <SafeAreaView style={{flex : 1, marginTop:10 }}>
        <CustomHeader title="Create task" navigation={this.props.navigation} />
          <View>
          <TextInput
            multiline
            style={{ height: 200, padding: 20, backgroundColor: 'white', fontSize:20, fontWeight:'bold'}}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder={'Create new task'}
          />
          <Text style={{ fontSize:20, color:'#333', fontWeight:"bold"}}>Time</Text>

          <TouchableOpacity style={styles.buttontask} 
          title="Create"
          onPress={() => {
              this.props.navigation.push('Home', { name : this.state.name});
          }}
          ><Text style={{color: '#fff'}}>Create</Text>
          </TouchableOpacity>
          
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttontask: {
    backgroundColor : '#EB7D16',
    width: 150,
    height: 50,
    borderRadius: 60,
    alignItems: 'center',
    borderColor: '#ccc',
    justifyContent: 'center',
    marginBottom: 5,
    zIndex: 5,
    marginHorizontal: 115,
  }
})