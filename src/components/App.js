import React, { Component, useCallback } from 'react';
import { 
    View, 
    Text
} from 'react-native';
// import Home from '../screens/Home';
import AppStack from '../routs/app_stack';
import { NavigationContainer } from '@react-navigation/native';

export default App = () => {

    // return (
    //     <NavigationContainer>
    //         <Home />
    //     </NavigationContainer>
    // )
    return(
        <NavigationContainer>
            <AppStack />
        </NavigationContainer> 
    )
}