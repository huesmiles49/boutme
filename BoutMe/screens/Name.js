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

export default class Name extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
    }
    this.firstName = ''
    this.lastName = ''
  }

  async componentDidMount() {
    try {
      let name_stored = await AsyncStorage.getItem('name')
      let name = JSON.parse(name_stored)
      let nameArr = name.detail.split(' ')

      this.setState({
        firstName: nameArr[0],
        lastName: nameArr[1]
      })

    } catch (e) {
      console.log('Unable to get data', e)
    }
  }

  updateName = async () => {    
    try {
      let nameData = {
        label: 'Name',
        detail: this.firstName + ' ' + this.lastName,
        editRoute: 'NameScreen'
      }

      // Store data
      await AsyncStorage.setItem('name', JSON.stringify(nameData))

      // Render the new name
      this.setState({
        firstName: this.firstName,
        lastName: this.lastName
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
              <Text style={styles.header}>What's your name?</Text>
            </View>

            <View style={styles.input}>
              <Input
                onChangeText={(text) => this.firstName = text}
                label="First Name"
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                placeholderTextColor="#a5a8ad"
                autoCorrect={false}
                placeholder={this.state.firstName}
              />

              <Input
                onChangeText={(text) => this.lastName = text}
                label="Last Name"
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                placeholderTextColor="#a5a8ad"
                autoCorrect={false}
                placeholder={this.state.lastName}
              />
            </View>

            <View style={styles.btnContainer}>
              <Button
                title="Update"
                buttonStyle={styles.updateBtn}
                onPress={() => this.updateName()} />
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

