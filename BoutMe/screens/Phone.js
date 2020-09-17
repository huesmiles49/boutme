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

export default class Phone extends React.Component {
  constructor() {
    super();

    this.state = {
      phone: ''
    }
    this.phone = ''
  }

  async componentDidMount() {
    try {
      let phone_stored = await AsyncStorage.getItem('phone')
      let phone = JSON.parse(phone_stored)

      this.setState({
        phone: phone.detail
      })

    } catch (e) {
      console.log('Unable to get data', e)
    }
  }

  updatePhone = async () => {
    console.log(this.phone)

    try {
      let phoneData = {
        label: 'Phone',
        detail: this.phone,
        editRoute: 'PhoneScreen'
      }

      // Store data
      await AsyncStorage.setItem('phone', JSON.stringify(phoneData))

      // Render the new phone
      this.setState({
        phone: this.phone
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
              <Text style={styles.header}>What's your phone number?</Text>
            </View>

            <View style={styles.input}>
              <Input
                onChangeText={(text) => this.phone = text}
                label="Your phone number"
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                placeholderTextColor={"#a5a8ad"}
                autoCorrect={false}
                keyboardType={"number-pad"}
                placeholder={this.state.phone}
              />
            </View>

            <View style={styles.btnContainer}>
              <Button
                title="Update"
                buttonStyle={styles.updateBtn}
                onPress={() => this.updatePhone()} />
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

