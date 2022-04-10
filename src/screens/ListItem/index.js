import React, { Component, useCallback, useEffect, useState } from 'react';
import { 
    SafeAreaView,
    View, 
    // Text,
    Pressable,
    // Image,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

import Collapsible from 'react-native-collapsible';

import { Text, Card, Button, Icon, ListItem, Avatar, Image } from 'react-native-elements';

import { HeaderList } from '../../components/Header';

import { getPokemon, IMG_URL } from '../../api';
import { getPokemonImgId } from '../../utils';


export default Home = (props) => {
    
    // const BASE_URI = 'https://www.caracteristicas.co/wp-content/uploads/2017/05/universo-1-e1568576142428.jpg';

    const { url } = props.route.params.item;
    const [ pokemon, setPokemon ] = useState();
    const [ imgId, setImgId ] = useState();
    const [ isCollapsed1, setIsCollapsed1 ] = useState(true);
    const [ isCollapsed, setIsCollapsed ] = useState(true);
    let url2;
    let [ url3, setUrl3 ] = useState();



    


    useEffect(() => {
        // if (typeof url === 'string' || url instanceof String){
        if (url?.includes('https')){
            url2 = url;
        }
        if (url2?.includes('pokemon-species')){
            url2 = url2?.replace('pokemon-species','pokemon');
        }
        console.log(url2)
        getPokemon(url2).then(data => {
            const path = url2.split('/');
            setPokemon(data);
            setImgId(getPokemonImgId(path[6]));
            setUrl3(url2);
        })
    },[])
    
    const loadMore = (prev_next) => {
        if (url3.includes('https')==true){
        // if (typeof url === 'string' || url instanceof String){
            url2 = url3;
        }

        if (url2.includes('pokemon-species')==true){
            url2 = url2.replace('pokemon-species','pokemon');
        }
        
        const num_before = url2.split('/');
        if(prev_next == true){
            let num = Number(num_before[6]);
            num > 898 ? num = 898 : num = num + 1;
            url2 = url2.replace(num_before[6],num.toString());
        }
        if(prev_next == false){
            let num = Number(num_before[6]);
            num < 1 ? num = 1 : num = num - 1;
            url2 = url2.replace(num_before[6],num.toString());
        }
        const path = url2.split('/');
        getPokemon(url2).then(data => {
            setPokemon(data);
            setImgId(getPokemonImgId(path[6]));
            setUrl3(url2);
        })
    }

    return(
        <SafeAreaView style={styles.container}>
            {/* <ImageBackground style={styles.mainContent} 
            source={require('../../assets/3.png')}
            > */}
            <ImageBackground
            resizeMode= "cover"
            source={require('../../assets/images/background.jpg')}
            // source={{ uri: BASE_URI }}
            Style={[styles.mainContent, {aspectRatio: 1,}]}
            PlaceholderContent={<ActivityIndicator />}
            >
                <HeaderList leftIcon='arrow-back' title={pokemon?.name.toUpperCase()} leftAction={() => props.navigation.goBack()} />
                <View style={styles.numberBlob}>
                    <Text style={styles.number}>{imgId}</Text>
                </View>
                <View style={{flex:1}}></View>
                <View Style={styles.cardContainer}>
                    <View style={[styles.viewContent, {flex:1.3, alignItems: 'center'}]}>
                    {/* <View style={[styles.viewContent, {backgroundColor:'red', flex:1}]}> */}
                        <Image containerStyle={styles.image} resizeMode='contain' source={{uri: `${IMG_URL}${imgId}.png`}} />
                        {/* <Image style={styles.image} resizeMode='contain' source={{uri: `${IMG_URL}${imgId}.png`}} /> */}
                        <View style={{flex:3, width:'100%', top:80, flexDirection:'row'}}>
                            <Text style={{color: '#ffffff80', width:'50%', textAlign: 'center'}}>{pokemon_lyric.a}</Text>
                            <Text style={{color: '#ffffff80', width:'50%', textAlign: 'center'}}>{pokemon_lyric.b}</Text>
                        </View>
                        <Text style={styles.shadow}> </Text>
                    </View>
                    <View style={[styles.viewContent, {flex:1}]}>
                    {/* <View style={[styles.viewContent, {backgroundColor:'blue', flex:1}]}> */}
                        <Text style={[styles.title, {fontSize: 20}]}>Peso: {((pokemon?.weight)/10).toFixed(1)} kg</Text>
                        <Text style={[styles.title, {fontSize: 20}]}>Altura: {((pokemon?.height)/10).toFixed(1)} m</Text>
                        
                        <TouchableOpacity onPress={() => setIsCollapsed1(!isCollapsed1)}>
                            <Text style={[styles.title, {fontSize: 20}]}>Tipos: </Text>
                        </TouchableOpacity>
                        <Collapsible collapsed={isCollapsed1} >
                            <View style={styles.types}>
                                {pokemon?.types.map(type => 
                                    (
                                        <Text style={styles.plainttext}>{type.type.name.toUpperCase()}</Text>
                                    )
                                )}
                            </View>
                        </Collapsible>
                        
                        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                            <Text style={[styles.title, {fontSize: 20}]}>Habilidades: </Text>
                        </TouchableOpacity>
                        <Collapsible collapsed={isCollapsed} >
                            <View style={styles.abilities}>
                                {pokemon?.abilities.map(abilities => 
                                    (
                                        <Text style={styles.plainttext}>{abilities.ability.name.toUpperCase()}</Text>
                                    )
                                )}
                            </View>
                        </Collapsible>
                        <Text style={[styles.title, {fontSize: 20}]}>Movimientos: </Text>
                        <ScrollView contentContainerStyle={styles.skills}>
                            {pokemon?.moves.map(moves => 
                                (
                                    <Text style={styles.skilltext}>{moves.move.name.toUpperCase()}</Text>
                                )
                            )}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.leftbutton}>
                    <TouchableOpacity
                        // style= {{margin: '5%'}}
                        onPress={()=>loadMore(false)}
                    >
                        <Icon type='antdesign' name='doubleleft' color='white' style={{size: 90}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rigthbutton}>
                    <TouchableOpacity
                        // style= {{margin: '5%'}}
                        onPress={()=>loadMore(true)}
                    >
                        <Icon type='antdesign' name='doubleright' color='white' style={{size: 90}}/>
                    </TouchableOpacity>
                </View>

                
            </ImageBackground>
        </SafeAreaView>
        
    )
}


export const pokemon_lyric = {
    a:"Tengo que ser siempre el mejor\nMejor que nadie más\nAtraparlos mi prueba es\nEntrenarlos, mi ideal\nYo viajaré de aquí a allá\nBuscando hasta el fin\nOh, Pokémon, yo te entenderé\nTu poder interiorvPokémon\nTengo que atraparlos (solos tú y yo)\nNuestro destino así es\nPokemón\nGran amigo es\nEn un mundo por salvar",
    b: "Pokémon\nTengo que atraparlos (mi amor es real)\nNuestro valor vencerá\nTe enseñaré y tú también\nPokémon\nAtraparlos ya (atraparlos ya)\nYeah\nUn nuevo reto perseguir\nCon mucho más valor\nDía a día de pelear\nHasta ser el mejor\nSíganme, la hora llegó\nYo soy el mejor\nPelearemos hombro con hombro\nSiempre ha sido nuestro ideal"
}

