import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {
  Text,
  Image,
  Button
} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class Photo extends React.Component {
  constructor() {
    super();
  }

  // Find a library to open Photo
  selectImage() {}

  render() {
    image = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

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
              <Image style={styles.image} source={{uri: image}} onPress={() => this.selectImage()} />
            </View>

            <View style={styles.updateBtnContainer}>
              <Button title="Update" raised buttonStyle={styles.updateBtn} onPress={() => console.log('update image')} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    color: "#226de6",
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

