import React, {Component} from "react"; 
import { Text, View, SafeAreaView, StyleSheet, Button  } from 'react-native';
import { CustomHeader } from '../index';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export class LoginFormScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex : 1}}>
              <CustomHeader title="Login" navigation={this.props.navigation} />
              <View style={styles.container}>
                <TextInput style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    placeholder="Email"
                    returnKeyType= "next"
                    onSubmitEditing={() => this.password.focus()}
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
                <TextInput style={styles.input}
                    onChangeText={(password) => this.setState({password})}
                    placeholder="password"
                    returnKeyType= "go"
                    secureTextEntry 
                    ref = {(input) => this.password = input}
                />
                <TouchableOpacity style = {styles.buttoncontainer} 
                    onPress = {() => this.props.navigation.navigate("HomeApp")}
                >
                    <Text style={styles.buttontext}> Login </Text>
                </TouchableOpacity>
                <Button
                    title = "Register Here"
                    color = "#333"
                    onPress = {() => this.props.navigation.navigate("Register")}
                />
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