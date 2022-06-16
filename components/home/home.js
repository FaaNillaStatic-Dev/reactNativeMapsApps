import React from 'react';
import GeoLocationServices from '../services/GeoLocationSevices';
import Header from './header'
import { View } from 'react-native';


export default function Home() {
        
    return (
        <View >
            <Header/>
            <GeoLocationServices />
        </View>
    );
}