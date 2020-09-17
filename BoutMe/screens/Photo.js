import React from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import ImagePicker from 'react-native-image-picker'

import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import {
  Text,
  Image,
  Button
} from 'react-native-elements';

export default class Photo extends React.Component {
  constructor() {
    super();

    this.state = {
      photo: 'https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png'
    }
    this.photo = ''
  }

  async componentDidMount() {
    try {
      let photo_stored = await AsyncStorage.getItem('photo')
      let photo = JSON.parse(photo_stored)
      
      this.setState({
        photo: photo.detail
      })

    } catch (e) {
      console.log('Unable to get data', e)
    }
  }

  async selectImage() {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')

      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
        
      } else {
        this.photo = 'data:image/jpeg;base64,' + response.data
        this.setState({
          photo: 'data:image/jpeg;base64,' + response.data,
        })
      }
    })
  }

  async updateImage() {
    try {
      let photoData = {
        label: 'Photo',
        detail: this.photo,
        editRoute: 'PhotoScreen'
      }

      // Store data
      await AsyncStorage.setItem('photo', JSON.stringify(photoData))

      // Render the new photo
      this.setState({
        photo: this.photo
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
              <Text style={styles.header}>Upload a photo of yourself:</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri: this.state.photo}}
                onPress={() => this.selectImage()} />
            </View>

            <View style={styles.updateBtnContainer}>
              <Button title="Update" raised buttonStyle={styles.updateBtn} onPress={() => this.updateImage()} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 25
  },
  image: {
    width: 200,
    height: 200
  },
  imageContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30
  },
  updateBtn: {
    backgroundColor: 'black'
  },
  updateBtnContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30
  }
});

