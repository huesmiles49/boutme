import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {
  Text,
  Avatar,
  Icon,
  ListItem
} from 'react-native-elements';

export default class Name extends React.Component {
  constructor() {
    super();
  }

  render() {
    const list = [{
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Homie :D',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    ]

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
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
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              onPress={() => console.log("Works!")}
              >
            </Avatar>
            <Icon
              raised
              name='mode-edit'
              type='material'
              color='#226de6'
              size={20}
              containerStyle={{position: 'absolute', right: 120, top: -5}}
              onPress={() => console.log('hello')} />
          </View>
          
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
});

