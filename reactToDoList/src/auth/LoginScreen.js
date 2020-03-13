import React, {Component} from "react"; 
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView>
              <ImageBackground 
                source={require('../images/background.jpg')} 
                style={styles.background}
               >             
              <View>
              <Text style={styles.text}>To do List.</Text>
                  <TouchableOpacity
                    style={{marginTop:20}}
                    onPress={() => this.props.navigation.navigate('LoginForm')}
                  >
                <Text style={styles.signup}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop:20}}
                  onPress={() => this.props.navigation.navigate('Register')}
                >
                <Text style={styles.login}>Registro</Text>
                </TouchableOpacity>
              </View>
              </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  text: {
    color: 'white',
    marginTop: '30%',
    marginLeft: '30%',
    fontSize: 30,
  },
  signup: {
    backgroundColor: 'white',
    color: '#cfd8dc',
    width: "75%",
    borderRadius: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '30%',
    zIndex: 5,
  },
  login: {
    backgroundColor: '#42a5f5',
    color: 'white',
    width: "75%",
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '10%'
  }
})