import React, {Component, useCallback} from 'react';
import {
StyleSheet,
View,
Text,
Linking,
StyleProp,
TextStyle,
ViewStyle,
Dimensions,
TouchableOpacity,
Alert,
} from 'react-native';
import { Header as HeaderRN, Icon } from 'react-native-elements';
import { styles } from './styles';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { SafeAreaProvider } from 'react-native-safe-area-context';


// import {user_1} from '../screens/Profile/index';

export default Header = (props) => {
    const _git = () => {
        Alert.alert(
        'Repositorios del autor', 'Ahora se abrirá GITHUB en el Navegador Web.', 
        [{text: 'Ok', onPress: () => Linking.openURL('https://github.com/echestare?tab=repositories')}]
        );
    }

    const _penguin = () => {
        Alert.alert(
        '¡¡¡APRETASTE AL PINGÜINO!!!', 'Que lindo pingüino ¿no?... Por eso está acá.', 
        [{text: 'ah! sisierto.', onPress: () => console.log('¡Pinguinooo!')}]
        );
    }

    return (
    <View style= {{position: 'absolute', top: 0}}>
        <HeaderRN 
        barStyle= 'light-contet'
        containerStyle= {{height: 80}}
        backgroundColor= {'#3465a490'}
        // leftComponent= {{icon: 'menu', color:'#FFF'}}
        leftComponent={
            <View style={styles.headerRight}>
                <TouchableOpacity style={{marginLeft: 10}} onPress={()=>_penguin()}>
                    <Icon type='material-community' name='penguin' color='white' style={{size: 40}}/>
                </TouchableOpacity>
            </View>}
        rightComponent={
            <View style={styles.headerRight}>
                <TouchableOpacity style={{marginLeft: 10}} onPress={()=>_git()}>
                    <Icon type='zocial' name='github' color='white' />
                </TouchableOpacity>
            </View>}
        centerComponent={{ text:'HOME', style: styles.heading }}
        />
    </View>
    );
}

export const HeaderProfile = (props) => {
    const _menu = () => {
        Alert.alert(
            'Menú', '1-Opción. 2-Opción. 3-Opción', 
            [{text: 'Ok', onPress: () => console.log('Menú')}]
        );
    }
    const _add = () => {
        Alert.alert(
            'Agregar', '1-Option. 2-Option. 3-Option', 
            [{text: 'Ok', onPress: () => console.log('Agregar')}]
        );
    }
    const { title } = props;


  return (
  <View style= {{position: 'absolute', top: 0}}>
      <HeaderRN 
      barStyle= 'light-contet'
      containerStyle= {{height: 80}}
      backgroundColor= {'transparent'}
      leftComponent={{text: title?title:{} , style: styles.headerleft }}
            //   leftComponent= {{ text: user_1.username, style: styles.headerleft }}
      // leftComponent= {{icon: 'penguin', type: 'material-community', color:'#FFF'}}
      // leftComponent= {{icon: 'menu', color:'#FFF'}}
      rightComponent= {
          <View style={styles.headerRight}>
            <TouchableOpacity style={{flexDirection:'row',}} onPress={()=>_add()}>
                <Icon type='material-community' name='plus-box-outline' color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',}} onPress={()=>_menu()}>
                <Icon name='menu' color='white' />
            </TouchableOpacity>
          </View>}
      />
  </View>
  );
}

export const HeaderList = (props) => {
    const { leftIcon, leftAction, title } = props;
    return (
        <View style= {{position: 'absolute', top: 0, zIndex: 3,}}>
        <HeaderRN 
            // containerStyle= {{height: 0}}
            containerStyle= {{height: 80}}
            // containerStyle= {leftIcon?({height: 80}):{height: 80}}
            barStyle= 'light-contet'
            backgroundColor= {'transparent'}
            leftComponent={leftIcon?
                (
                    <TouchableOpacity
                    style= {{margin: '5%'}}
                    onPress={leftAction?() => leftAction():false}
                    >
                        <Icon type='material' name={leftIcon} color='white' size={30}/>
                    </TouchableOpacity>
                ):{}}
            centerComponent={{text: title?title:{} , style: styles.heading }}
        />
    </View>
    );
  }

  export const HeaderMaps = (props) => {
    return (
    <View style= {{position: 'absolute', top: 0}}>
        <HeaderRN 
            containerStyle= {{height: 0}}
            barStyle= 'light-contet'
            backgroundColor= {'transparent'}
        />
    </View>
    );
  }