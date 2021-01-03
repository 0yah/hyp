
import { StatusBar, StyleSheet, Text, View } from "react-native";



import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';

import {ActivityIndicator, Colors} from 'react-native-paper';
import splash from '../splash.png';
const image = { uri: require('../splash.png') };
export const Splash = () => {
  console.log('hj');
  return <View style={styles.container}>
      <StatusBar hidden />
  <ActivityIndicator/>
</View>
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent:'center'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });
  