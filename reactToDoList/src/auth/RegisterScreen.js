import React, {Component} from "react"; 
import { Text, View, SafeAreaView, StyleSheet, Button  } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { CustomHeader } from '../index';

export class RegisterScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex : 1}}>
              <CustomHeader title="Register" navigation={this.props.navigation} />
              <View style={styles.container}>
              <View style={styles.registerf}>
                <TextInput style={styles.input}
                    placeholder="Enter your name"
                    returnKeyType= "next"
                    onSubmitEditing={() => this.emailInput.focus()}
                />
                <TextInput style={styles.input}
                    placeholder="Enter your email"
                    returnKeyType= "next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    ref = {(input) => this.emailInput = input}
                />
                <TextInput style={styles.input}
                    placeholder="Enter password"
                    returnKeyType= "go"
                    secureTextEntry 
                    ref = {(input) => this.passwordInput = input}                    
                />
                <TouchableOpacity style = {styles.buttoncontainer} 
                  onPress = {() => this.props.navigation.navigate("HomeApp")}
                >
                    <Text style={styles.buttontext}> Sign Up </Text>
                </TouchableOpacity>
              </View>
              </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#cfd8dc",
    justifyContent: 'center',
    alignItems : 'stretch'
  },
  registerf: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  input: {
      paddingLeft: 20,
      borderRadius: 50,
      height: 50,
      fontSize: 25,
      backgroundColor: "white",
      borderWidth: 1,
      marginBottom: 20,
      color: "#260e04"
  },
  buttoncontainer:{
      height: 50,
      borderRadius: 50,
      backgroundColor: '#42a5f5',
      paddingVertical: 10,
      justifyContent: 'center'
  },
  buttontext: {
      textAlign: 'center',
      color: "#260e04",
      fontSize: 20
  }
})