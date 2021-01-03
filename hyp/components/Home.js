import { View, Text } from "react-native";
import React, {
    createContext,
    useState,
    useContext,
    useReducer,
    useEffect,
    useMemo,
} from 'react';
import { store, checkUser } from '../redux'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const Home = () => {

    var items = [9, 9, 9, 88,9]
    const globalState = store.getState();

    const renderItems = () => {


        return <FlatList
            data={items}
        numColumns={2}
            renderItem={(item) => {
                return <View style={{
                    padding:3,
                    flex:1
                }}>

                    <Card>
                        <Card.Title title="Card Title" />
                        
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Content>
                            <Paragraph>Ksh 5</Paragraph>
                        </Card.Content>
                    </Card>
                </View>
            }}
        />


    }
    return <View>
        {renderItems()}
    </View>
}