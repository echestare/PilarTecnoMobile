import React, { Component, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Maps from '../screens/Maps';

const Stack = createStackNavigator();

export default MapsStackNavigator = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
    );
}



