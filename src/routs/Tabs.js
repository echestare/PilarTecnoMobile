import React, { Component, useCallback } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack';
import ListStack from './ListStack';
import MapsStack from './MapsStack';
import ProfileStack from './ProfileStack';

const Tab = createMaterialBottomTabNavigator();


export default Tabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Casa' component={HomeStack} />
            <Tab.Screen name='Lista' component={ListStack} />
            <Tab.Screen name='Mapa' component={MapsStack} />
            <Tab.Screen name='Perfil' component={ProfileStack} />
        </Tab.Navigator>
    );
}

