import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Name from './screens/Name';

const AppStack = createStackNavigator(
    {
        Home: Home,
        Name: Name,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <AppStack / > ;
    }
}
