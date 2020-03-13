import React, {Component} from "react"; 
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

export class CustomHeader extends Component {
    render() {
      let { navigation, isHome, title} = this.props
        return (

            <View style={{ flexDirection: 'row', height: 50}}>
            <StatusBar barStyle = "ligth-content" backgroundColor = "#ffe0b2"/>
              <View style={{flex: 1, justifyContent: 'center'}} >
              {
                isHome?
                  <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} >
                    <Image style={{width:30, height:30, marginLeft: 5}}
                      source={require('../src/images/menu.png')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                : 
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={()=> this.props.navigation.goBack()}
                >
                  <Image style={{width: 20, height: 20, marginLeft: 5}} 
                    source={require('../src/images/back.png')}
                    resizeMode="contain"
                  />
                  <Text>Back</Text>
                </TouchableOpacity>
              }
              </View>
              
              <View style={{flex:1.5, justifyContent:'center'}}>
                <Text style={{textAlign:'center'}}>{title}</Text>
              </View>
              <View style={{flex:1}}></View>
            </View>
          );
    }
}