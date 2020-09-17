import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Name from './screens/Name';
import Photo from './screens/Photo';
import Email from './screens/Email';
import Phone from './screens/Phone';
import Bio from './screens/Bio';

export default class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        const Stack = createStackNavigator();
        const homeScreenOptions = {
            headerTitle: null,
            headerBackTitleVisible: false,
            headerShown: false
        }
        const screenOptions = {
            headerTitle: null,
            headerBackTitleVisible: false,
            headerShown: true,
        }

        return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={Home} options={homeScreenOptions} />
                <Stack.Screen name="NameScreen" component={Name} options={screenOptions} />
                <Stack.Screen name="PhotoScreen" component={Photo} options={screenOptions} />
                <Stack.Screen name="EmailScreen" component={Email} options={screenOptions} />
                <Stack.Screen name="PhoneScreen" component={Phone} options={screenOptions} />
                <Stack.Screen name="BioScreen" component={Bio} options={screenOptions} />
            </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
