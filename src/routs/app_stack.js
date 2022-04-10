import React, { Component, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Login from '../screens/Auth/Signin';
import { useSelector } from 'react-redux';

import Home from '../screens/Home';
import List from '../screens/Lists';
import ListItem from '../screens/ListItem';
import Maps from '../screens/Maps';
import Profile from '../screens/Profile';


const Stack = createStackNavigator();

export default AppStack = (props) => {

    const isloged = useSelector(state=>state.user.user);
    
    return(
        <Stack.Navigator
        screenOptions={{ headerShown: false }}>
            {
                isloged? (
                    <Stack.Screen name="Tabs" component={Tabs} />
                ) : (
                    <Stack.Screen name="LogIn" component={Login} />
                ) 
            }
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="ListItem" component={ListItem} />
            <Stack.Screen name="Maps" component={Maps} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

// import React, { Component, useCallback } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/Home';
// import List from '../screens/Lists';
// import Maps from '../screens/Maps';
// import Profile from '../screens/Profile';

// const Stack = createStackNavigator();

// export default AppStack = (props) => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="List" component={List} />
//             <Stack.Screen name="Maps" component={Maps} />
//             <Stack.Screen name="Profile" component={Profile} />
//         </Stack.Navigator>

//     );
// }





