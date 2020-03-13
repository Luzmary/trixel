import React, {Component} from "react"; 
import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export class CustomDrawerContent extends Component { 
   render() {
        return (
          
            <SafeAreaView style={{flex: 1}}>
              <View style={{height: 150, alignItems: 'center', justifyContent:'center'}}>
                <Image source={require('../src/images/account.png')} 
                 style={{height:120, width: 120, borderRadius: 60}}
                />
              </View>
              <ScrollView style={{marginLeft:5}}>
                <TouchableOpacity style={{marginTop:20}} 
                onPress={() => this.props.navigation.navigate('Home') } >
                  <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20}} 
                onPress={() => this.props.navigation.navigate('Login') } >
                  <Text>Logout</Text>
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
        );       
    }
}