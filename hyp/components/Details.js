import { View, Image, Text } from 'react-native';
import React, {
    createContext,
    useState,
    useContext,
    useReducer,
    useEffect,
    useMemo,
} from 'react';
import { store, checkUser } from '../redux';
import storage from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const reference = storage().ref('Products');

export const Details = () => {
    var items = [9, 9, 9, 88, 9];
    const globalState = store.getState();

    const [products, setProducts] = useState([]);

    const getProduct = () => {
        firestore()
            .collection('Product')
            .onSnapshot((result) => {
                let products = [];
                result.forEach((re) => {
                    console.log(re.data());
                    products.push(re.data());
                });
                setProducts(products);
            });
    };

    const renderItems = () => {
        return (
            <FlatList
                data={products}

                contentContainerStyle={{ margin: 10, backgroundColor: 'white' }}

                renderItem={(item) => {
                    console.log(item);
                    return (
                        <View style={{
                            width: '100%',
                            height: 500,
                            borderColor: 'black',
                            borderWidth: 0.5,
                            margin: 5,
                            backgroundColor: 'white'

                        }}>
                            <Image source={{ uri: item.item.Image }}

                                style={{ width: '100%', height: '90%' }}
                            />

                            <View style={{

                                padding: 1,
                                margin: 1
                            }}>
                                <Text>{item.item.Name}</Text>
                                <Text>$ {item.item.Price}</Text>

                            </View>

                        </View>
                    );
                }}
            />
        );
    };

    useEffect(() => {
        getProduct();
    }, []);

    return <View>{renderItems()}</View>;
};
