import React from "react";
import { View, Text, } from 'react-native';
import Style from "../style/style";


export default function Header() {
    return (
        <View style={ Style.BoxHeader }>
            <Text Style={ Style.TextHeader }>Aplikasi Maps</Text>
        </View>
    );
}