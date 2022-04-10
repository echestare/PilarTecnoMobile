import React, { Component, useCallback, useEffect, useState } from 'react';
import { 
    RefreshControl,
    SafeAreaView,
    View, 
    ImageBackground,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { HeaderList } from '../../components/Header';
import { getPokemonList, IMG_URL} from '../../api';
import { getPokemonImgId } from '../../utils';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
let counter = 1;


export default List = (props) => {
    
    const { leftIcon, rightIcon } = props;


    const [ generation, setGeneration ] = useState();
    const [ pokemons, setPokemons ] = useState();
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

    const loadMore = (prev_next) => {
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
            setNext(data.next);
            setLoadingMore(false);
        })
    }

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    },[]);

    const renderItem = (item, index) =>{
        const path = item.url.split('/')

        const imgID = getPokemonImgId(path[6])

        return (
            <ListItem key={index} bottomDivider style={styles.ListItem}>
            <TouchableOpacity 
            onPress={()=>props.navigation.navigate('ListItem', item={item})}
            >
                <Avatar size='large' source={{uri: `${IMG_URL}${imgID}.png`}} />
                <ListItem.Content>
                    <ListItem.Title> {imgID}</ListItem.Title>
                    <ListItem.Title>{item.name.toUpperCase()}</ListItem.Title>
                </ListItem.Content>
            </TouchableOpacity>
          </ListItem>
        )
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
            resizeMode= "cover"
            source={require('../../assets/images/background.jpg')}
            Style={[styles.mainContent, {aspectRatio: 1,}]}
            PlaceholderContent={<ActivityIndicator />}
            >
                <HeaderList title={genName} />
                <View style = {styles.list}>
                    <FlatList
                        data={pokemons?.sort(function(a, b){
                            return (Number(a.url.split('/')[6]) < Number(b.url.split('/')[6])) ? -1 : (Number(a.url.split('/')[6]) > Number(b.url.split('/')[6])) ? 1 : 0;
                           })}
                        numColumns={2}
                        columnWrapperStyle={{justifyContent:'space-between', alignContent: 'center'}}
                        ItemSeparatorComponent={
                            () => <View style={{ width: 10, backgroundColor: 'transparent' }}/>
                        }
                        renderItem={(item, index) => renderItem(item.item, index)}
                        keyExtractor={(item, index) => index}
                        refreshControl={
                            <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => onRefresh()}
                            />
                        }
                    />
                </View>
                <View style={styles.leftbutton}>
                    <TouchableOpacity
                        onPress={()=>loadMore(false)}
                    >
                        <Icon type='antdesign' name='doubleleft' color='white' style={{size: 90}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rigthbutton}>
                    <TouchableOpacity
                        // style= {{margin: '5%'}}
                    >
                        <Icon type='antdesign' name='doubleright' color='white' style={{size: 90}}/>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </SafeAreaView>
        
    )
}