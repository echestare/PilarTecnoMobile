import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground,
    Image,
    ActivityIndicator ,
    Alert,
} from 'react-native';
import { styles } from './styles'

import Header from '../../components/Header'

export default Home = (props) => {
    
    // const BASE_URI = 'https://www.caracteristicas.co/wp-content/uploads/2017/05/universo-1-e1568576142428.jpg';

    const _homeAlert = () => {
        Alert.alert(
        'YA ESTÁS EN EL INICIO','',
        [{text: 'ah! sisierto.', }]
        );
    }
    
    return(
        <SafeAreaView style={styles.container}>
            {/* <ImageBackground style={styles.mainContent} source={require('../../assets/3.png')} > */}
            <ImageBackground
            resizeMode= "cover"
            // source={{ uri: BASE_URI }}
            source={require('../../assets/images/background.jpg')}
            Style={[styles.mainContent, {aspectRatio: 1,}]}
            PlaceholderContent={<ActivityIndicator />}
            >
                <Header />
                <View style={[,{flex: 5, alignItems: 'center', justifyContent: 'center',}]}>
                    <Text style={[styles.title, {fontSize: 40}]}>PANTALLA DE</Text>
                    <Text style={[styles.title, {fontSize: 40}]}>"HOME"</Text>
                </View>
                <View style={styles.rowContent}>
                    <Pressable
                        style={[styles.buttonContent, {borderColor: 'red', borderWidth: 2}]}
                        onPress={()=>_homeAlert()}
                    >
                        <Text style={styles.title}>INICIO</Text>
                        {/* <Text style={styles.title}>de</Text> */}
                    </Pressable>
                    <Pressable 
                        style={styles.buttonContent}
                        onPress={()=>props.navigation.navigate('LISTA')}
                    >
                        <Text style={styles.title}>LISTA</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.buttonContent}
                        onPress={()=>props.navigation.navigate('MAPA')}

                    >
                        <Text style={styles.title}>MAPA</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.buttonContent}
                        onPress={()=>props.navigation.navigate('PERFIL')}
                    >
                        <Text style={styles.title}>PERFIL</Text>
                    </Pressable>
                </View>
                {/* <View style={ [styles.mainContent, {flex:2, width:'100%', backgroundColor:'grey'}]} /> */}
            </ImageBackground>
        </SafeAreaView>
        
    )
}