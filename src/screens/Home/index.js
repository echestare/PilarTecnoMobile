import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    ImageBackground,
    ActivityIndicator ,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles'
import Header from '../../components/Header'
import { Icon } from 'react-native-elements';


export default Home = (props) => {
    
    const _homeAlert = () => {
        Alert.alert(
        'YA ESTÁS EN EL INICIO','',
        [{text: 'ah! sisierto.', }]
        );
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
            resizeMode= "cover"
            source={require('../../assets/images/background.jpg')}
            Style={[styles.mainContent, {aspectRatio: 1,}]}
            PlaceholderContent={<ActivityIndicator />}
            >
                <Header />
                <View style={[,{flex:4, alignItems: 'center', justifyContent: 'center',top:50}]}>
                    <Text style={[styles.title, {fontSize: 50}]}>PILAR TECNO</Text>
                    <Text style={[styles.title, {fontSize: 20}]}>MI PRIMER APP</Text>
                </View>
                <View style={styles.rowContent}>
                    <TouchableOpacity
                        style={[styles.buttonContent, {borderColor: 'red', borderWidth: 2}]}
                        onPress={()=>_homeAlert()}
                    >
                        <Text style={styles.title}> INICIO </Text>
                        <Icon type='material-community' name='monitor-star' color='white' style={{size: 40}}/>
                    </TouchableOpacity>
                    <View />
                    <View />
                    <View />
                </View>
                <View style={styles.rowContent}>
                    <View />
                    <TouchableOpacity
                        style={[styles.buttonContent, {borderColor: '#00000060', borderWidth: 2}]}
                        onPress={()=>props.navigation.navigate('LISTA')}
                    >
                        <Text style={styles.title}> LISTA </Text>
                        <Icon type='material-community' name='playlist-star' color='white' style={{size: 40}}/>
                    </TouchableOpacity>
                    <View />
                    <View />
                </View>
                <View style={styles.rowContent}>
                    <View />
                    <View />
                    <TouchableOpacity
                        style={[styles.buttonContent, {borderColor: '#00000060', borderWidth: 2}]}
                        onPress={()=>props.navigation.navigate('MAPA')}
                    >
                        <Text style={styles.title}> MAPA </Text>
                        <Icon type='ionicon' name='rocket' color='white' style={{size: 40}}/>
                    </TouchableOpacity>
                    <View />
                </View>
                <View style={styles.rowContent}>
                    <View />
                    <View />
                    <View />
                    <TouchableOpacity 
                        onPress={()=>props.navigation.navigate('PERFIL')}
                        style={[styles.buttonContent, {borderColor: '#00000060', borderWidth: 2}]}
                    >
                        <Text style={styles.title}> PERFIL </Text>
                        <Icon type='material-community' name='star-face' color='white' style={{size: 40}}/>
                    </TouchableOpacity>
                </View>
                <View style={ [styles.rowContent, {flex:1,}]} />
            </ImageBackground>
        </SafeAreaView>
    )
}