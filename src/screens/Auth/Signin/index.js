import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground,
    Image,
    ActivityIndicator 
} from 'react-native';
import { styles } from './styles';
import Header from '../../../components/Header';
import { Input, Icon, Button } from 'react-native-elements';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { actions } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { GoogleSocialButton, FacebookSocialButton } from "react-native-social-buttons";


export default Home = (props) => {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const dispatch = useDispatch();
    
    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '479772379178-80d8gd8sfh4p5f7koeirl59ltmutll53.apps.googleusercontent.com',
        });
    }, [])
    
    const onChangeEmail = (value) =>{
        setEmail(value);
    }
    const onChangePw = (value) =>{
        setPw(value);
    }

    const _signIn = async () => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(true))
        } catch (e) {
            //saving
        }
        dispatch(actions.user.setUser(true))
    }

    const onGoogleButtonPress = async () => {
        // Get the user ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }


    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
            resizeMode= "cover"
            source={require('../../../assets/images/background.jpg')}
            Style={[styles.mainContent, {aspectRatio: 1,}]}
            PlaceholderContent={<ActivityIndicator />}
            >
                <Header />
                <View style={[,{flex: 1.8, alignItems: 'center', justifyContent: 'center', top: 80}]}>
                    <Text style={[styles.title, {fontSize: 40}]}>LOGIN: </Text>
                </View>
                <View style={[,{flex: 2.2, alignItems: 'center', justifyContent: 'center', flexDirection:'column'}]}>
                    <Text>{email}</Text>
                    <Text>{pw}</Text>
                    <Text style={[{fontSize: 25, color: 'white', fontWeight: 'bold',}]}>Ingreso a Pilar Tecno:</Text>
{/* 
                    <Input
                        style={[{color: 'white'}]}
                        placeholder='Correo Electrónico'
                        placeholderTextColor= 'white'
                        leftIcon={{ type: 'font-awesome', name: 'user', color:'#FFFFFF' }}
                        onChangeText={value=>onChangeEmail(value)}
                    />
                    <Input
                        style={[{color: 'white'}]}
                        placeholder='Contraseña'
                        secureTextEntry={true}
                        placeholderTextColor= 'white'
                        leftIcon={{ type: 'font-awesome', name: 'lock', color:'#FFFFFF' }}
                        onChangeText={value=>onChangeEmail(value)}
                        keyboardType='number-pad'
                    />
                    <View style= {[styles.buttonContent]}>
                        <Button 
                        title='Ingresar'
                        // title='Ingresar (botón deshabilitado)'
                        titleStyle={{ fontWeight: 'bold'}}
                        containerStyle={{width:'90%'}}
                        onPress={()=>_signIn()}
                        />
                    </View> */}
                    <View style= {[styles.buttonContent,{ marginTop: 10 }]}>
                        {/* <Button 
                            title='Continuar con GOOGLE'
                            titleStyle={{ fontWeight: 'bold'}}
                            containerStyle={{width:'90%'}}
                            icon={{name: 'google', type: 'zocial', size: 15, color: 'white', }}
                            iconRight
                            iconContainerStyle={{ marginLeft: 40 }}
                            onPress={()=>onGoogleButtonPress().then(async(data)=>{
                                console.log('Signed in with Google!')
                                if(data){
                                    console.log('res login: ' + JSON.stringify(data.user))
                                    try {
                                        await AsyncStorage.setItem('user', JSON.stringify(data.user))
                                    } catch (e) {
                                        console.log('hubo un error: ' + e)
                                    }
                                    // this.props.setUser(data.user);   
                                    dispatch(actions.user.setUser(data.user))
                                }
                            })}
                        /> */}
                        <GoogleSocialButton
                        buttonTitle='Continuar con GOOGLE'
                        textStyle= {{ fontWeight: 'bold'}}
                        buttonViewStyle={{width:'90%', color: '#de4d41', backgroundColor: '#f5e7ea'}}
                        onPress={()=>onGoogleButtonPress().then(async(data)=>{
                            console.log('Signed in with Google!')
                            if(data){
                                console.log('res login: ' + JSON.stringify(data.user))
                                try {
                                    await AsyncStorage.setItem('user', JSON.stringify(data.user))
                                } catch (e) {
                                    console.log('hubo un error: ' + e)
                                }
                                // this.props.setUser(data.user);   
                                dispatch(actions.user.setUser(data.user))
                            }
                        })}
                        />
                        {/* <FacebookSocialButton
                        buttonTitle='Continuar con FACEBOOK'
                        textStyle= {{ fontWeight: 'bold'}}
                        buttonViewStyle={{width:'90%'}}
                        onPress={()=>onGoogleButtonPress().then(async(data)=>{
                            console.log('Signed in with Facebook!')
                            if(data){
                                console.log('res login: ' + JSON.stringify(data.user))
                                try {
                                    await AsyncStorage.setItem('user', JSON.stringify(data.user))
                                } catch (e) {
                                    console.log('hubo un error: ' + e)
                                }
                                // this.props.setUser(data.user);   
                                dispatch(actions.user.setUser(data.user))
                            }
                        })}
                        /> */}
                    </View>
                </View>

            </ImageBackground>
        </SafeAreaView>
        
    )
}