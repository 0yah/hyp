import { View, Text, Image } from "react-native";
import React, {
    createContext,
    useState,
    useContext,
    useReducer,
    useEffect,
    useMemo,
} from 'react';


import { Avatar, Button, Card, Searchbar, List } from 'react-native-paper';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { store, checkUser } from '../redux'
export const Favourite = () => {

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState(false);



    var items = [{ name: 'Shirts', description: '' }, { name: 'Hoodie', description: '' }, { name: 'Hoodies', description: '' }, { name: 'Caps & Hats', description: '' }, { name: 'Bag', description: '' }, { name: 'Shoe', description: '' }, { name: 'Jacket', description: '' }]
    const globalState = store.getState();

    const renderItems = () => {


        return <FlatList
            data={items}
            renderItem={(data) => {
                return (
                    <TouchableOpacity>
                        <View style={{
                            borderWidth: 2,
                            padding: 5,
                            height: 100,
                            margin: 5,
                            justifyContent: 'center'

                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20,
                            }}>{data.item.name}</Text>
                        </View>

                    </TouchableOpacity>
                )
            }}
        />


    }

    return <View style={{
        flex: 1,
        display: 'flex'
    }}>
        <Searchbar
            placeholder="Search"
            onChangeText={(text) => {
                setQuery(text);
            }}
            value={query}
            onFocus={() => {
                console.log('Show list')
                setSearchResults(true);
            }}

            onBlur={() => {
                setSearchResults(false);
            }}

        />

        {renderItems()}



    </View>
}

