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



    var items = [{name:'Hat'}, {name:'Shoes'}, {name:'Hoodies'}, {name:'Trousers'},{name:'Shirts'},{name:'Jeans'},{name:'Jackets'},{name:'Bags'},{name:'Masks'},{name:'Undergarments'}]
    const globalState = store.getState();

    const renderItems = () => {


        return <FlatList
            data={items}
            renderItem={(item) => {
                return  <List.Item
                title={item.item.name}
                description="Item description"
                left={props => <Avatar.Image  {...props}  source={{ uri: 'https://picsum.photos/700' }} />}
              />
            }}
        />


    }

    return <View style={{
        flex:1,
        display:'flex'
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
        


        <View style={{

            display: 'flex',
            position:'relative',
            top:0,
            zIndex:1,
            flex:1
        }}>

<Text>jjkkjjkjk</Text>

        </View>
    </View>
}

