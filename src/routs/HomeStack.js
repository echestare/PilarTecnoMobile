import React, { Component, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/Lists';
import Maps from '../screens/Maps';
import Profile from '../screens/Profile';

const HomeStack = createStackNavigator();

export default HomeStackNavigator = (props) => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="List" component={List} />
            <HomeStack.Screen name="Maps" component={Maps} />
            <HomeStack.Screen name="Profile" component={Profile} />
        </HomeStack.Navigator>

    );
}



