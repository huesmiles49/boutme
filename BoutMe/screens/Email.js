import React from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {
  Text,
  Button,
  Input
} from 'react-native-elements';

export default class Email extends React.Component {
  constructor() {
    super();

    this.state = {
      email: ''
    }
    this.email = ''
  }

  async componentDidMount() {
    try {
      let email_stored = await AsyncStorage.getItem('email')
      let email = JSON.parse(email_stored)

      this.setState({
        email: email.detail
      })

    } catch (e) {
      console.log('Unable to get data', e)
    }
  }

  updateEmail = async () => {
    console.log(this.email)

    try {
      let emailData = {
        label: 'Email',
        detail: this.email,
        editRoute: 'EmailScreen'
      }

      // Store data
      await AsyncStorage.setItem('email', JSON.stringify(emailData))

      // Render the new email
      this.setState({
        email: this.email
      })

      // Redirect to home screen
      this.props.navigation.navigate('HomeScreen')

    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View
              style={{
                marginTop: 60,
                marginBottom: 10,
                flexDirection:"row",
                justifyContent:"center"
              }}
            >
              <Text style={styles.header}>What's your email?</Text>
            </View>

            <View style={styles.input}>
              <Input
                onChangeText={(text) => this.email = text}
                label="Your email address"
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                autoCorrect={false}
                keyboardType={"email-address"}
                placeholderTextColor={"#a5a8ad"}
                placeholder={this.state.email}
              />
            </View>

            <View style={styles.btnContainer}>
              <Button
                title="Update"
                buttonStyle={styles.updateBtn}
                onPress={() => this.updateEmail()} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  header:{
    fontSize: 25,
    fontWeight: "bold"
  },
  input: {
    marginLeft: 30,
    marginRight: 30
  },
  inputContainerStyle: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10
  },
  inputContainer: {
    marginTop: 20
  },
  inputStyle: {
    marginLeft: 10
  },
  btnContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30
  },
  updateBtn: {
    backgroundColor: 'black',
    marginTop: 20
  }
});

