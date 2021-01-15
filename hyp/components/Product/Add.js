import { View, Text, Image } from "react-native";
import storage from '@react-native-firebase/storage';

import React, {
    createContext,
    useState,
    useContext,
    useReducer,
    useEffect,
    useMemo,
} from 'react';
import { store, checkUser } from '../../redux'

import { Avatar, Button, Card, Title, Paragraph, TextInput, TextInputMask } from 'react-native-paper';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const reference = storage().ref('Products');

export const Add = () => {


    const [productName, setProductName] = useState();
    const [progess, setProgress] = useState(0);
    const [displayImage, setDisplayImage] = useState('https://reactnative.dev/img/tiny_logo.png');
    const [productImage, setProductImage] = useState(null);
    const [productPrice, setProductPrice] = useState();
    const [products, setProducts] = useState([]);

    const addProduct = (data) => {

        firestore().collection('Product').add(data).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    const updateProduct = (id, data) => {
        firestore().collection('Product').doc(id).update(data).then((result) => {
            console.log(result);

        }).catch((error) => {
            console.log(error);
        })
    }

    const getProduct = () => {
        firestore().collection('Product').onSnapshot((result) => {
            var products = []
            result.forEach((re) => {
                console.log(re.data())
                products.push(re.data())
            })
            setProducts(products);
            console.log()
        });

    }


    const selectPhotoTapped = () => {
        const options = {
          quality: 1.0,
          storageOptions: {
            skipBackup: true,
          },
        };


        
    
        launchImageLibrary(options, (response) => {
          //console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            // let source = {uri: response.uri};
    
            // You can also display the image using data:
           // let source = { uri: 'data:image/jpeg;base64,' + response };
            //console.log(source);
            console.log(response);
           
            setDisplayImage(response.uri)
            setProductImage(response);
            
      
          }
        });
      };
    

    const newProduct =()=>{

        var data = {
            Name:productName,
            Price:productPrice
        }
        console.log(productName);
        //addProduct(data)

        const { uri } = productImage;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      
        const reference = storage().ref(`Products/${productName}`);

        var task = reference.putFile(uploadUri);

        task.on("state_changed",(snapshot)=>{

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;


        },(error)=>{

        },(success)=>{

            task.snapshot.ref.getDownloadURL().then((url)=>{
                var data = {
                    Name:productName,
                    Price:productPrice,
                    Image:url,
                }
                console.log(url);
                addProduct(data)

                
            }).catch((error)=>{


            });
        });

    }

    return <View>
        <Text>

        </Text>

        <TextInput
            label="Product Name"
            value={productName}
            mode='outlined'
            placeholder=""
            onChangeText={text => setProductName(text)}
            style={{
                borderColor: 'red'
            }}
        />


        <TextInput
            label="Product Price"
            value={productPrice}
            mode='outlined'
            keyboardType="decimal-pad"
            placeholder=""
            onChangeText={text => setProductPrice(text)}
            style={{
                borderColor: 'red'
            }}
            theme={{ colors: { primary: 'red', underlineColor: 'transparent', } }}
        />

        <Image
            style={{

                width: 50,
                height: 50,
            }}
            source={{
                uri: displayImage,
            }}
        />

        <Button icon="camera" mode="contained" onPress={() =>selectPhotoTapped()}>
            Select Product Image me
  </Button>

        <Button icon="camera" mode="contained" onPress={() => newProduct()}>
            Add Product   </Button>
    </View>
}