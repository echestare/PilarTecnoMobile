import React, { Component, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs'
// import Login from './Login'


const Stack = createStackNavigator();

export default AppStack = (props) => {
    const isloged = true;
    return(
        <Stack.Navigator>
            {
                <Stack.Screen name="Tabs" component={Tabs} />

                // isloged? (
                //     <Stack.Screen name="Tabs" component={Tabs} />
                // ) : (
                //     <Stack.Screen name="LogIn" component={Login} />
                // )

            }
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





