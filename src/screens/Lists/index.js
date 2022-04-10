import React, { Component, useCallback, useEffect, useState } from 'react';
import { 
    RefreshControl,
    SafeAreaView,
    View, 
    // Text,
    Pressable,
    ImageBackground,
    Image,
    ActivityIndicator,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

import { Text, Card, Button, Icon, ListItem, Avatar } from 'react-native-elements';

import { HeaderList } from '../../components/Header';

import { getPokemonList, IMG_URL} from '../../api';
import { getPokemonImgId } from '../../utils';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
let counter = 1;


export default List = (props) => {
    
    const { leftIcon, rightIcon } = props;

    // const BASE_URI = 'https://www.caracteristicas.co/wp-content/uploads/2017/05/universo-1-e1568576142428.jpg';

    const [ generation, setGeneration ] = useState();
    const [ pokemons, setPokemons ] = useState();
    // const [ previous, setPrevious ] = useState();
    const [ next, setNext ] = useState();
    const [ refreshing, setRefreshing ] = useState(false);
    const [ genName, setgenName ] = useState(false);
    const [ loadingMore, setLoadingMore ] = useState(false);

    useEffect(() => {
        getPokemonList(1).then(data => {
            setgenName(data.name)
            setPokemons(data.pokemon_species);
            setNext(data.next);
        })
    }, [])
    // useEffect(() => {
    //     getPokemonList().then(data => {
    //         setPokemons(data.results);
            // setPokemons(data.pokemon_entries);//this works with pokemon by pokedex
    //         setNext(data.next);
    //     })
    // }, [])

    // const loadMore_previous = () => {
    //     setLoadingMore(true);
    //     getPokemonList(previous).then(data => {
    //         setPokemons(data.results);
    //         setPrevious(data.previous);
    //         setLoadingMore(false);
    //     })
    // }
    const loadMore = (prev_next) => {
        // const pokedex_list = [2,7,15,6,9,12,13,14,21];//this is for POKEDEX: 12, 13 y 14 son kalos central, coastal y mountain
        // let n = 0?n>8:(n = n+1)
        if (prev_next==true){
            if (counter>7){
                counter = 1;
            }
            else{
                counter = counter+1;
            }
        }
        if (prev_next==false){
            if (counter<1){
                counter = 7;
            }
            else{
                counter = counter-1;
            }
        }
        setLoadingMore(true);
        getPokemonList(counter).then(data => {
            setgenName(data.name)
            setPokemons(data.pokemon_species);
            // setPokemons(data.pokemon_entries);//this works with pokemon by pokedex
            setNext(data.next);
            setLoadingMore(false);
        })
    }
    // const loadMore_next = () => {
        
    //     // const pokedex_list = [2,7,15,6,9,12,13,14,21];//this is for POKEDEX: 12, 13 y 14 son kalos central, coastal y mountain
    //     // let n = 0?n>8:(n = n+1)
        
    //     if (counter>7){
    //         counter = 1;
    //     }
    //     else{
    //         counter = counter+1;
    //     }
    //     setLoadingMore(true);
    //     getPokemonList(counter).then(data => {
    //         setPokemons(data.pokemon_species);
    //         // setPokemons(data.pokemon_entries);//this works with pokemon by pokedex
    //         setNext(data.next);
    //         setLoadingMore(false);
    //     })
    // }

    // const loadMore_next = () => {
    //     setLoadingMore(true);
    //     getPokemonList(2, next).then(data => {
    //         // setPokemons(data.pokemon_entries.pokemon_species);
    //         setPokemons([...pokemons, ...data.pokemon_entries.pokemon_species]);
    //         setNext(data.next);
    //         setLoadingMore(false);
    //     })
    // }
    // const loadMore_next = () => {
    //     setLoadingMore(true);
    //     getPokemonList(next).then(data => {
    //         // setPokemons(data.results);
    //         setPokemons([...pokemons, ...data.results]);
    //         setNext(data.next);
    //         setLoadingMore(false);
    //     })
    // }


    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    },[]);

    const renderItem = (item, index) =>{
        // const imgID = getPokemonImgId(JSON.stringify(item.id))
        // const imgID = getPokemonImgId(JSON.stringify(index+1))
        // const path = item.entry_number;
        const path = item.url.split('/')

        // const imgID = getPokemonImgId(path.toString())
        const imgID = getPokemonImgId(path[6])

        return (
            <ListItem key={index} bottomDivider style={{width:'93%', alignSelf:'center', marginVertical:'2%', borderWidth:0.5, borderColor: '#707070'}}>
            <TouchableOpacity 
            onPress={()=>props.navigation.navigate('ListItem', item={item})}
            style={styles.rowContent}
            >
                <Avatar source={{uri: `${IMG_URL}${imgID}.png`}} />
                <ListItem.Content>
                    <ListItem.Title> {imgID} - {item.name.toUpperCase()}</ListItem.Title>
                    {/* <ListItem.Title>{item.pokemon_species.name}</ListItem.Title> */}
                    {/* <ListItem.Subtitle>{item.id}</ListItem.Subtitle> */}
                </ListItem.Content>
            </TouchableOpacity>
          </ListItem>
        )
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
                {/* <HeaderList /> */}
                <HeaderList title={genName} />
                {/* <HeaderList title={genName?.toUpperCase()} /> */}

                {/* <View style={styles.cardContainer}> */}
                    {/* <Text style={[styles.title, {fontSize: 40}]}>PANTALLA DE</Text>
                    <Text style={[styles.title, {fontSize: 40}]}>"LISTA"</Text> */}
                {/* </View> */}
                {/* <View>

                </View> */}
                <View style = {styles.list}>
                    {/* <ScrollView style={styles.list}>
                        {pokemons && pokemons.map((item, index) => renderItem(item, index))}
                    </ScrollView> */}
                    <FlatList
                        // data={pokemons}
                        data={pokemons?.sort(function(a, b){
                            return (Number(a.url.split('/')[6]) < Number(b.url.split('/')[6])) ? -1 : (Number(a.url.split('/')[6]) > Number(b.url.split('/')[6])) ? 1 : 0;
                           })}
                        // bouces = {false}
                        renderItem={(item, index) => renderItem(item.item, index)}
                        keyExtractor={(item, index) => index}
                        // style = {styles.list}
                        refreshControl={
                            <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => onRefresh()}
                            />
                        }
                        // ListHeaderComponent={
                        //     loadingMore?
                        //     (<ActivityIndicator />):
                        //     (<Button title='Cargar más...' onPress={() => loadMore_next()}/>)
                        // }
                        // ListHeaderComponent={
                        //     loadingMore?
                        //     (<ActivityIndicator />):
                        //     (<Button title='Cargar más...' onPress={() => loadMore_previous()}/>)
                        // }
                        // ListFooterComponent={
                        //     loadingMore?
                        //     (<ActivityIndicator />):
                        //     (<Button title='Cargar más...' onPress={() => loadMore_next()}/>)
                        // }
                    />
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