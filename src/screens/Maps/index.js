import React, { Component, useCallback, useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    ImageBackground,
    Image,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

import { HeaderMaps } from '../../components/Header';

import { Icon, Button } from 'react-native-elements';

import MapView, { Marker } from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LATITUDE = -32.9320576;
const LATITUDE = -29.413019;
// const LONGITUDE = 0;
// const LONGITUDE = -68.822851;
const LONGITUDE = -66.855724;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;




export default Maps = (props) => {

    // const BASE_URI = 'https://www.caracteristicas.co/wp-content/uploads/2017/05/universo-1-e1568576142428.jpg';

    const [mapType, setMapType] = useState('standard');
    
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    useEffect(() => {
        _getLocation()
    }, []);


    onRegionChange = region => {
        setRegion(region)
    }

    const fitCoordinates = async () => {
        console.log('centrando mapa')
        this._getLocation()
    }

    const changeMapType = () => {
        if (mapType === 'standard') {
            setMapType('satellite')
        } else {
            setMapType('standard')
        }
    }

    _getLocation = async () => {
        await Geolocation.getCurrentPosition(
            async posicion => {
                const longitude = posicion.coords.longitude;
                const latitude = posicion.coords.latitude;
                mapRef.animateToRegion(
                    {
                        latitude,
                        longitude,
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta
                    },
                    1000
                );
                setRegion({ region: { ...region, longitude, latitude } })
                console.log('posicion actual... Latitud: ' 
                + `${JSON.stringify(longitude)}` 
                + 'latitud: '+`${JSON.stringify(latitude)}`)
            },
            (error) => {
                console.log('')
                console.log('')
                console.log('')
                console.log('')
                console.log(error.code, error.message);
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: true,
            }
        )
    }
    


    return (
        <SafeAreaView style={styles.container}>
            {/* <ImageBackground style={styles.mainContent} 
            source={require('../../assets/3.png')}
            > */}
            <ImageBackground
                resizeMode="cover"
                source={require('../../assets/images/background.jpg')}
                // source={{ uri: BASE_URI }}
                Style={[styles.mainContent, { aspectRatio: 1, }]}
                PlaceholderContent={<ActivityIndicator />}
            >
                <HeaderMaps />
                <View style={styles.mapContent}>
                    <MapView
                        ref = {(ref) => mapRef=ref}
                        mapType={mapType}
                        // initialRegion={region}
                        // loadingEnabled 
                        style={styles.map}
                        onRegionChangeComplete={(region) => onRegionChange(region)}
                        // mapType= {mapType}// 'terrain' hybrid satellite standard
                    />
                    <View style={styles.crossIcon}>
                        <Icon
                            name="crosshairs"
                            type="font-awesome"
                            color='#efe9e1'
                            size={width/8}
                            onPress={() => fitCoordinates()}
                        />
                    </View>
                    <View style={styles.mapType} >
                        <TouchableOpacity
                            onPress={() => changeMapType()}
                            // containerStyle={styles.mapButtonContent}
                            // style={styles.mapButtonStandard}
                        >
                            <Text style={{color:'#ffffff'}}> Standard / Satelital </Text>
                            {/* <Text style={styles.title}> Mapa Standard / Satelital </Text> */}
                            <View style={{ flexDirection: 'row', alignContent:'center', alignItems:'center'}}>
                                <Icon type='fontisto' name='map' color='white' style={{size: 30, flex:1}}/>
                                <Text style={{flex:1, color: '#ffffff', fontSize:20}}>      </Text>
                                <Icon type='font-awesome-5' name='satellite' color='white' style={{size: 30, flex:1}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.markerFixed}>
                        <Image style={styles.marker} resizeMode='contain' source={require('../../assets/images/pin.png')} />
                    </View>
                    <SafeAreaView style={styles.footer}>
                        <Text style={styles.region}>
                            latitud:{JSON.stringify(region.latitude?.toFixed(6))}{"\n"}
                            longitud:{JSON.stringify(region.longitude?.toFixed(6))}
                        </Text>
                    </SafeAreaView>
                    {/* </MapView> */}
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}