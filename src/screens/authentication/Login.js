import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import { StackNavigator } from "react-navigation";
//import Spinner from "react-native-loading-spinner-overlay";
//45<Image style={styles.logo} source={require("./banana.png")} />
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  async onLoginPress() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.subtext}>Login</Text>
          </View>
          
          <KeyboardAvoidingView style={styles.keyboard} behavior='padding'>
            <TextInput
              placeholder="Username"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              secureTextEntry
              ref={input => (this.passwordInput = input)}
              style={styles.input}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLoginPress.bind(this)}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Register")}
            title="Sign up"
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("ForgetPassword")}
            title="Forget Password"
          >
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#16a085"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    fontSize: 35,
    textAlign: "center",
    opacity: 0.8
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  keyboard:{
    margin: 0,
    padding: 20,
    alignSelf: "stretch",
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  }
});

AppRegistry.registerComponent("Login", () => Login);
