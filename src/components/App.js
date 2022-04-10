import React, { Component, useCallback, useEffect, useState } from 'react';
import { 
    View, 
    Text
} from 'react-native';
// import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '../routs/app_stack';
import {Provider} from 'react-redux';
import { store } from '../store';
import { hasLocationPermission } from '../LocationPermission';

import auth from '@react-native-firebase/auth';
import { useDispatch, } from 'react-redux';
import { actions } from '../store';


export default App = () => {

    useEffect(() => {
        hasLocationPermission()
        // console.log('ACTIVANDO HASLOCATION --- BIP BIP')
    }, [])

    // return (
    //     <NavigationContainer>
    //         <Home />
    //     </NavigationContainer>
    // )
    return(
        <Provider store={store}>
            <NavigationContainer>
                <AppStack />
                {/* <AppWrapped /> */}
            </NavigationContainer> 
        </Provider>

    )
}

// let AppWrapped = () => {
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();
//     const dispatch = useDispatch()
//     // Handle user state changes
//     async function onAuthStateChanged(user) {
//         if (user) {
//             setUser(user)
//         } else {
//             dispatch(actions.user.setUser(null))
//         }
//         if (initializing) setInitializing(false);
//     }
//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//     }, []);
//     if (initializing) { return null; }
//     return (
//         <NavigationContainer ref={navigationRef}>
//             <AppStack />
//         </NavigationContainer>
//     );
// }