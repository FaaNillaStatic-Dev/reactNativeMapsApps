/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from "./components/home/home";
import Style from "./components/style/style";

export default function App() { 

  return (
    <SafeAreaView  style={ Style.container }>
      <Home/>
  </SafeAreaView>
  );
};