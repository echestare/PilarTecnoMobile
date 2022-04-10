import React, { Component, useCallback } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import List from '../screens/Lists';
import ListItem from '../screens/ListItem';
import Maps from '../screens/Maps';
import Profile from '../screens/Profile';
// import { Icon } from 'react-native-elements'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default Tabs = () =>{
    return(
        <Tab.Navigator
        activeColor= '#3D962B'
        inactiveColor= '#c884a6'
        barStyle={{backgroundColor: '#ccd5ff'}}
        >
            <Tab.Screen name='INICIO' component={Home} 
            options= {{tabBarIcon:({color})=>(<IconMC name={'home'} size={25} color={color} solid/>), }}
            />
            <Tab.Screen name='LISTA' component={List} 
            options= {{tabBarIcon:({color})=>(<IconMC name={'playlist-plus'}  size={25} color={color} />), }}
            // options= {{tabBarIcon:({color})=>(<Icon name={'material'} type='' size={20} color={color} />), }}
            // card-plus-outline        plus-box-outline        plus-box-multiple-outline
            />
            <Tab.Screen name='MAPA' component={Maps} 
            options= {{tabBarIcon:({color})=>(<IconMC name={'map-marker-outline'} size={25} color={color} />), }}
            />
            <Tab.Screen name='PERFIL' component={Profile} 
            options= {{tabBarIcon:({color})=>(<IconMC name={'human-male'} size={25} color={color} />), }}
            // options= {{tabBarIcon:({color})=>(<Icon name={'supervised-user-circle'} type='material' size={20} color={color} />), }}
            />
        </Tab.Navigator>
    );
}



// import React, { Component, useCallback } from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import HomeStack from './HomeStack';
// import ListStack from './ListStack';
// import MapsStack from './MapsStack';
// import ProfileStack from './ProfileStack';
// // import { Icon } from 'react-native-elements'
// import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createMaterialBottomTabNavigator();

// export default Tabs = () =>{
//     return(
//         <Tab.Navigator
//         activeColor= '#3D962B'
//         inactiveColor= '#c884a6'
//         barStyle={{backgroundColor: '#ccd5ff'}}
//         >
//             <Tab.Screen name='INICIO' component={HomeStack} 
//             options= {{tabBarIcon:({color})=>(<IconMC name={'home'} size={25} color={color} solid/>), }}
//             />
//             <Tab.Screen name='LISTA' component={ListStack} 
//             options= {{tabBarIcon:({color})=>(<IconMC name={'playlist-plus'}  size={25} color={color} />), }}
//             // options= {{tabBarIcon:({color})=>(<Icon name={'material'} type='' size={20} color={color} />), }}
//             // card-plus-outline        plus-box-outline        plus-box-multiple-outline
//             />
//             <Tab.Screen name='MAPA' component={MapsStack} 
//             options= {{tabBarIcon:({color})=>(<IconMC name={'map-marker-outline'} size={25} color={color} />), }}
//             />
//             <Tab.Screen name='PERFIL' component={ProfileStack} 
//             options= {{tabBarIcon:({color})=>(<IconMC name={'human-male'} size={25} color={color} />), }}
//             // options= {{tabBarIcon:({color})=>(<Icon name={'supervised-user-circle'} type='material' size={20} color={color} />), }}
//             />
//         </Tab.Navigator>
//     );
// }

