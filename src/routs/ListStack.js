import React, { Component, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../screens/Lists';
import ListItem from '../screens/ListItem';

const Stack = createStackNavigator();

export default ListStackNavigator = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="ListItem" component={ListItem} />
        </Stack.Navigator>
    );
}



