import React from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import {
  Text,
  Avatar,
  Icon,
  ListItem
} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component {
  constructor() {
    super();

    // initialize
    this.userData = []
    this.userPhoto = {}

    this.dummyData = [
      {
        label: 'Name',
        detail: 'Bout Me',
        editRoute: 'NameScreen'
      },
      {
        label: 'Phone',
        detail: '000-000-000',
        editRoute: 'PhoneScreen'
      },
      {
        label: 'Email',
        detail: 'boutMe@gmail.com',
        editRoute: 'EmailScreen'
      },
      {
        label: 'Bio',
        detail: 'This profile is all about me!',
        editRoute: 'BioScreen'
      }
    ]

    this.dummyPhoto = {
      label: 'Photo',
      detail: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      editRoute: 'PhotoScreen'
    }

    this.state = {
      data: [],
      photo: {}
    }

  }

  async componentDidMount() {
    try {
      let photo_stored = await AsyncStorage.getItem('photo')
      let name_stored = await AsyncStorage.getItem('name')
      let phone_stored = await AsyncStorage.getItem('phone')
      let email_stored = await AsyncStorage.getItem('email')
      let bio_stored = await AsyncStorage.getItem('bio')

      let photo = JSON.parse(photo_stored)
      let name = JSON.parse(name_stored)
      let phone = JSON.parse(phone_stored)
      let email = JSON.parse(email_stored)
      let bio = JSON.parse(bio_stored)

      // Set Photo
      this.userPhoto = photo ? photo : this.dummyPhoto

      // Create list to render
      this.userData[0] = name ? name : this.dummyData[0]
      this.userData[1] = phone ? phone : this.dummyData[1]
      this.userData[2] = email ? email : this.dummyData[2]
      this.userData[3] = bio ? bio : this.dummyData[3]
      
      this.setState({
        data: this.userData,
        photo: this.userPhoto
      })

    } catch (e) {
      console.log('Unable to get data', e)
    }
  }

  async componentDidUpdate() {
    try {
      let photo_stored = await AsyncStorage.getItem('photo')
      let name_stored = await AsyncStorage.getItem('name')
      let phone_stored = await AsyncStorage.getItem('phone')
      let email_stored = await AsyncStorage.getItem('email')
      let bio_stored = await AsyncStorage.getItem('bio')

      let photo = JSON.parse(photo_stored)
      let name = JSON.parse(name_stored)
      let phone = JSON.parse(phone_stored)
      let email = JSON.parse(email_stored)
      let bio = JSON.parse(bio_stored)

      // Set Photo
      this.userPhoto = photo ? photo : this.dummyPhoto

      // Create list to render
      this.userData[0] = name ? name : this.dummyData[0]
      this.userData[1] = phone ? phone : this.dummyData[1]
      this.userData[2] = email ? email : this.dummyData[2]
      this.userData[3] = bio ? bio : this.dummyData[3]

      this.setState({
        data: this.userData,
        photo: this.userPhoto
      })

    } catch (e) {
      console.log('Unable to get data', e)
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
              <Text style={{color: "#226de6", fontWeight: "bold"}} h4>Edit Profile</Text>
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection:"row",
                justifyContent:"center"
              }}
            >
              <Avatar
                rounded
                size="xlarge"
                overlayContainerStyle={{borderColor: "#226de6", borderWidth: 5}}
                source={{
                  uri: this.state.photo.detail,
                }}
                onPress={() => this.props.navigation.navigate('PhotoScreen')}
                >
                  <Icon
                raised
                name='mode-edit'
                type='material'
                color='#226de6'
                size={20}
                containerStyle={{position: 'absolute', right: 0, top: -5}} />
              </Avatar>
            </View>
            
            <View 
              style = {
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                }
              }
            >
              {this.state.data.map((l, i) => (
                  <ListItem
                    button
                    underlayColor="black"
                    onPress={() => this.props.navigation.navigate(l.editRoute)}
                    key={i}
                    bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title style={styles.listItem}>{l.label}</ListItem.Title>
                      <ListItem.Subtitle>{l.detail}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron
                      name="chevron-right"
                      type="font-awesome"
                      size={20}
                      color="#c9ccd1" />
                  </ListItem>
                ))
              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  listItem: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 8
  }
});

