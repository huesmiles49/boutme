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

export default class Bio extends React.Component {
  constructor() {
    super();

    this.state = {
      bio: '',
      textColor: '#a5a8ad'
    }
    this.bio = ''
  }

  async componentDidMount() {
    try {
      let bio_stored = await AsyncStorage.getItem('bio')
      let bio = JSON.parse(bio_stored)
      
      this.setState({
        bio: bio.detail
      })

    } catch (e) {
      console.log('Unable to get data', e)
    }
  }

  updateBio = async () => {
    console.log(this.bio)

    try {
      let bioData = {
        label: 'Tell us about yourself',
        detail: this.bio,
        editRoute: 'BioScreen'
      }

      // Store data
      await AsyncStorage.setItem('bio', JSON.stringify(bioData))

      // Render the new bio
      this.setState({
        bio: this.bio
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
            <View style={styles.headerContainer}>
              <Text style={styles.header}>What is your favorite adventure?</Text>
            </View>

            <View style={styles.input}>
              <Input
                onChangeText={(text) => this.bio = text}
                multiline={true}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                autoCorrect={false}
                textAlignVertical={"top"}
                defaultValue={this.state.bio}
              />
            </View>

            <View style={styles.btnContainer}>
              <Button
                title="Update"
                raised
                buttonStyle={styles.updateBtn}
                onPress={() => this.updateBio()} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  header:{
    fontSize: 25,
    fontWeight: "bold"
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
  },
  inputContainerStyle: {
    borderColor: '#e0e0e0',
    borderWidth: 1,
    marginTop: 10,
    height: 170
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});

