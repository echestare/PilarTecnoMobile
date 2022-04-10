import React, { Component } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ImageBackground,
    ActivityIndicator ,
} from 'react-native';
import { connect } from 'react-redux'
import { Avatar, Button, Input, Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
// import { actions } from '../../store';
import { actions } from '../../store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles'
import { useDispatch } from 'react-redux';

import { HeaderProfile } from '../../components/Header'

const { height, width } = Dimensions.get('window')

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            photoURL: '',
            name: ''
        }
    }
    componentDidMount = () => {
        const { user } = this.props
        console.log('user profile: ' + JSON.stringify(user))
        this.setState({
            email: user.providerData[0].email,
            photoURL: user.providerData[0].photoURL,
            name: user.providerData[0].displayName
        })
    }
    
    render() {

        const { email, photoURL, name } = this?.state
        
        return (
            // <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    resizeMode= "cover"
                    source={require('../../assets/images/background.jpg')}
                    // PlaceholderContent={<ActivityIndicator />}
                >
                    <HeaderProfile title={name}/>
                    <View style={[styles.profile, {flex: 1}]}>
                    {/* <View style={styles.content}> */}
                        <View style={[{flexDirection: 'row', }]}>
                        {/* <View style={{ alignItems: 'center' }}> */}
                            <Image 
                                source={{ uri: photoURL }}
                                style={styles.profilePicture}
                            />
                             <View style={styles.numberboxs}>
                                <View>
                                    <Text style={styles.textboxs}>10</Text>
                                    <Text style={[styles.textboxs, {fontWeight: 'normal', fontSize: 13}]}>item 1</Text>
                                </View>
                                <View>
                                    <Text style={styles.textboxs}>10</Text>
                                    <Text style={[styles.textboxs, {fontWeight: 'normal', fontSize: 13}]}>item 2</Text>
                                </View>                
                                <View>
                                    <Text style={styles.textboxs}>10</Text>
                                    <Text style={[styles.textboxs, {fontWeight: 'normal', fontSize: 13}]}>item 3</Text>
                                </View>
                            </View>
                            {/* <Avatar
                                rounded
                                source={{ uri: photoURL }}
                                size='xlarge'
                            /> */}
                            {/* <View style={styles.dataContainer}>
                                <Text style={styles.infoText}>{email}</Text>
                                <Text style={styles.infoText}>{name}</Text>
                            </View> */}
                        </View>
                    </View>
                    {/* <Text style={[, {color: 'white', fontSize: 16, top: 100, left: 30}]}>{name}</Text> */}
                    <Text style={[, {color: 'white', fontSize: 16, top: 100, left: 40}]}>(Estado del usuario...) </Text>
                    <View>
                        <Text style={styles.describe}> (Una breve descripción...)</Text>
                    </View>
                    <Pressable
                        style={[styles.buttonContent]}
                        onPress={()=>console.log('EDIT PROFILE')}
                    >
                        <Text style={styles.editprofilebutton}>Editar Perfil (botón que todavía no funciona)</Text>
                    </Pressable>
                    <View style={[styles.rowContent, {flex: 3}]}>
                    {/* <View style={{ flex: 1, top: 50, width: width * 0.5 }}> */}
                        <Button 
                            containerStyle={'90%'}
                            title='Salir' 
                            onPress={() => {
                                auth()
                                    .signOut()
                                    .then(async () => {
                                        console.log('User signed out!'),
                                            this.props.setUser({ user: null })
                                        try {
                                            await AsyncStorage.delItem('isloged')
                                        } catch (e) {
                                            console.log('hubo un error :' + e)
                                        }
                                    })
                                }} 
                            />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
   

const mapDispatchToProps = dispatch => ({
    setUser: ({ user }) =>
        dispatch(actions.user.setUser({ user })),
})
const mapStateToProps = state => ({
    user: state.user.user
})
export default connect(mapStateToProps, mapDispatchToProps)((Profile))


// import React, { Component, useCallback } from 'react';
// import { 
//     SafeAreaView,
//     StyleSheet,
//     View, 
//     Text,
//     Pressable,
//     ImageBackground,
//     Image,
//     ActivityIndicator 
// } from 'react-native';
// import { styles } from './styles'
// import { Input, Icon, Button } from 'react-native-elements';
// import { AsyncStorage } from '@react-native-async-storage/async-storage';
// import { actions } from '../../store/actions';
// import { useDispatch } from 'react-redux';

// import { HeaderProfile } from '../../components/Header'


// export default Home = (props) => {

//     const dispatch = useDispatch();

//     const _singOut = async () => {
//         try {
//             await AsyncStorage.delItem('user', JSON.stringify(false))
//         } catch (e) {
//             //saving
//         }
//         dispatch(actions.user.setUser(false))
//     }

// //    const BASE_URI = 'https://www.caracteristicas.co/wp-content/uploads/2017/05/universo-1-e1568576142428.jpg';
//     const profilePic = 'https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/08/18/14715198808472.jpg';

//     return(
//         <SafeAreaView style={styles.container}>
//             <ImageBackground
//             resizeMode= "cover"
         //   // source={{ uri: BASE_URI }}
//             source={require('../../assets/images/background.jpg')}
//             PlaceholderContent={<ActivityIndicator />}
//             >
//                 <HeaderProfile />
//                 <View style={[styles.profile, {flex: 1}]}>
//                     <View style={[{flexDirection: 'row', }]}>
//                         <Image 
//                             source={{ uri: profilePic }}
//                             style={styles.profilePicture}
//                         />
//                         <View style={styles.numberboxs}>
//                             <View>
//                                 <Text style={styles.textboxs}>{user_1.item1}</Text>
//                                 <Text style={[styles.textboxs, {fontWeight: 'normal', fontSize: 13}]}>item 1</Text>
//                             </View>
//                             <View>
//                                 <Text style={styles.textboxs}>{user_1.item2}</Text>
//                                 <Text style={[styles.textboxs, {fontWeight: 'normal', fontSize: 13}]}>item 2</Text>
//                             </View>                
//                             <View>
//                                 <Text style={styles.textboxs}>{user_1.item3}</Text>
//                                 <Text style={[styles.textboxs, {fontWeight: 'normal', fontSize: 13}]}>item 3</Text>
//                             </View>
//                         </View>
//                     </View>
//                     <Text style={[, {color: 'white', fontSize: 16, top: 100, left: 30}]}>{user_1.completename}</Text>
//                     <Text style={[, {color: 'white', fontSize: 16, top: 100, left: 40}]}>({user_1.Estado})</Text>
//                     <View>
//                         <Text 
//                             style={styles.describe}
//                         >
//                             {user_1.description}
//                         </Text>
//                     </View>
//                     <Pressable
//                         style={[styles.buttonContent]}
//                         onPress={()=>console.log('EDIT PROFILE')}
//                     >
//                         <Text style={styles.editprofilebutton}>Editar Perfil</Text>
//                     </Pressable>
//                 </View>
//                 {/* <View style={[,{flex: 5, alignItems: 'center', justifyContent: 'center',}]}>
//                     <Text style={[styles.title, {fontSize: 40}]}>PANTALLA DE</Text>
//                     <Text style={[styles.title, {fontSize: 40}]}>"PERFILE"</Text>
//                 </View> */}
//                 <View style={styles.rowContent}>
//                     <Button
//                         title= 'SALIR'
//                         onPress={()=>_singOut()}
//                         containerStyle={'90%'}
//                      /> 
//                 </View>
//                 {/* <View style={ [styles.mainContent, {flex:2, width:'100%', backgroundColor:'grey'}]} /> */}
//             </ImageBackground>
//         </SafeAreaView>
        
//     )
// }



// export const user_1 = {
//     username: 'Feyman_from_Manhattan',
//     completename: 'Richard Phillips Feynman',
//     description: 'Físico teórico estadounidense. Premio Nobel compartido de Física en 1965 por contribuciones al desarrollo de la electrodinámica cuántica.',
//     // description: 'Físico teórico estadounidense. Trabajos más importantes: formulación por integrales de camino en la mecánica cuántica, la teoría de la electrodinámica cuántica y la física de la superfluidez del helio líquido subenfriado, así como en la física de partículas, campo en el que se propuso el modelo Partón. Premio Nobel de Física en 1965, junto con Julian Schwinger y Sin-Itiro Tomonaga, por contribuciones al desarrollo de la electrodinámica cuántica.',
//     Estado: 'Muerto, pero eterno',
//     item1: '30',
//     item2: '40',
//     item3: '50'
// }





