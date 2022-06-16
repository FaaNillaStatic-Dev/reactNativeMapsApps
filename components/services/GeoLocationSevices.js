import React, { useEffect, useState } from "react";
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Style from "../style/style";
import { Text, View, Pressable, PermissionsAndroid } from 'react-native';



export default function GeoLocationServices() {

    useEffect(() => {
        requestPermission()
    })


 
    const [location, setLocation] = useState({
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    
    const GeoLocationServices = async () => {
        if (requestPermission) {
            Geolocation.getCurrentPosition(
                (pos) => {
                    const latitude = pos.coords.latitude
                    const longitude = pos.coords.longitude
                    setLocation({
                        latitude: latitude,
                        longitude : longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    })
                    console.log(location)
                    console.log(location.latitude)
                },
                (error) => { 
                    console.log(error.message)
                },
                {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
            )

        } else {
        requestPermission(); 
       }
       
     
    }


    const requestPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: "MapsApps Ask Permission Location",
                  message:
                    "MapsApps needs access to your Location " +
                    "so the Apps can detect your location.",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK"
                }
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the Location");
              } else {
                console.log("Location permission denied");
              }
            
        } catch (error) {
        console.log(error.message)
        }
    }



    return (
        <View>
     <MapView
                style={Style.MapStyle}
                initialRegion={location}
                region={location}

    ><Marker
        coordinate={{
            latitude: location.latitude,
            longitude : location.longitude
            }}
                    pinColor="red"
                    title="You"
     /></MapView>
  
    <View Style={Style.BoxX}>
                <Pressable style={Style.ButtonStyle} onPress={GeoLocationServices}
                android_ripple={{ color: '#F9F2ED', borderless: false }}>
                <Text style={Style.Buttontext}>Refresh</Text>
            </Pressable>    
            </View>

            <Text style={Style.TextOut}>Latitude : {location.latitude}</Text>
            <Text style={Style.TextOut}>Longitude : {location.longitude}</Text>



        </View>


    );


}







