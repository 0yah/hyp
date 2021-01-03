import { View,Text } from "react-native";
import React, {
    createContext,
    useState,
    useContext,
    useReducer,
    useEffect,
    useMemo,
  } from 'react';
  
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { store } from "../redux";

  
export const Profile = () =>{

    const globalState = store.getState();

    return <View>



        <Card style={{
            margin:5,
            padding:5,
            
        }}>

<Card.Title
    title={globalState.name}
    subtitle={globalState.email}
    left={(props) => <Avatar.Image  {...props}  source={{uri:globalState.photo}} />}
  />

        </Card>
    </View>
}