import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground,
    Image 
} from 'react-native';
import { styles } from './styles'


export default Profile = (props) => {

    return(
        <SafeAreaView style={styles.container}>
            {/* <ImageBackground style={styles.mainContent} source={require('../../assets/3.png')}> */}
            <View style={ [styles.mainContent, {flex:5, width:'100%', backgroundColor:'grey'}]}>
                <Text style={[styles.title, {fontSize: 40}]}>PANTALLA DE "PERFIL"</Text>
            </View>
            <View style={styles.rowContent}>
                <Pressable
                    style={styles.buttonContent}
                    onPress={()=>props.navigation.navigate('Home')}
                    >
                    <Text style={styles.title}>Acerca</Text>
                    <Text style={styles.title}>de</Text>
                </Pressable>
                <Pressable 
                    style={styles.buttonContent}
                    onPress={()=>props.navigation.navigate('List')}
                >
                    <Text style={styles.title}>LISTA</Text>
                </Pressable>
                <Pressable 
                    style={styles.buttonContent}
                    onPress={()=>props.navigation.navigate('Maps')}

                >
                    <Text style={styles.title}>MAPA</Text>
                </Pressable>
                <Pressable 
                    style={[styles.buttonContent, {borderColor: 'red', borderWidth: 2}]}
                    onPress={()=>props.navigation.navigate('Profile')}
                >
                    <Text style={styles.title}>PERFIL</Text>
                </Pressable>

            {/* </ImageBackground> */}
            </View>

        </SafeAreaView>
        
    )
}