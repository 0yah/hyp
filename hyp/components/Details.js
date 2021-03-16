import {View, Image, Text, ScrollView, ToastAndroid} from 'react-native';
import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import {store, checkUser} from '../redux';
import storage from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Snackbar,
} from 'react-native-paper';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const reference = storage().ref('Products');

export const Details = ({route, navigation}) => {
  var items = [9, 9, 9, 88, 9];
  const globalState = store.getState();

  const [products, setProducts] = useState([]);
  const [showSnackBar, setShowSnackBar] = useState(false);

  console.log();
  const getProduct = () => {
    firestore()
      .collection('Product')
      .where('Category', '==', route.params.Category)
      .where(firestore.FieldPath.documentId(), '!=', route.params.id)
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
        horizontal
        contentContainerStyle={{margin: 1, backgroundColor: 'white'}}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={400 + 10}
        pagingEnabled
        renderItem={(item) => {
          return (              <View
                style={{
                  width: 400,
                  height: 500,
                  borderColor: 'black',
                  borderWidth: 0.5,
                  margin: 5,
                  backgroundColor: 'white',
                }}>
                <Image
                  source={{uri: item.item.Image}}
                  style={{width: '100%', height: '90%'}}
                />

                <View
                  style={{
                    padding: 1,
                    margin: 1,
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
    navigation.setOptions({title: route.params.Name});
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View
        style={{
          height: 350,
          width: '100%',
        }}>
        <Image
          source={{uri: route.params.Image}}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <View
        style={{
          padding: 7,
          borderWidth: 1,
          borderRadius: 5,
          margin: 5,
        }}>
        <Text
          style={{
            fontSize: 15,
          }}>
          {route.params.Description}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 5,
          }}>
          <Button
            mode="outlined"
            icon="cart"
            color="black"
            style={{
              margin: 10,
            }}
            contentStyle={{
              margin: 0,
            }}>
            <Text>${route.params.Price}</Text>
          </Button>
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Button
            mode="outlined"
            icon="heart"
            color="black"
            style={{
              margin: 10,
            }}
            contentStyle={{
              margin: 0,
            }}
            onPress={() => {
              ToastAndroid.show('Liked', ToastAndroid.LONG);
            }}></Button>
        </View>
      </View>
      <View
        style={{
          padding: 5,
          margin: 10,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Similar Products
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}>
          Category: {route.params.Category}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {renderItems()}
      </ScrollView>
    </ScrollView>
  );
};
