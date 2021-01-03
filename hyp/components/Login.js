import { View, Text } from "react-native";
import React, {
    createContext,
    useState,
    useContext,
    useReducer,
    useEffect,
    useMemo,
} from 'react';

import { Button } from 'react-native-paper';

import { webClientID } from "../keys";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

import{store,checkUser} from '../redux'



export const Login = () => {


    async function onGoogleButtonPress() {
        //console.log(webClientID);
        GoogleSignin.configure({
            webClientId: webClientID,
        });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        //console.log("Token is",idToken);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    return <View>
        <Text>Login Screen</Text>
        <Button mode="outlined" onPress={() => {
            onGoogleButtonPress().then((result) => {

                var name = result.user.displayName;
                var email = result.user.email;
                var auth =result.user.uid;
                var photo = result.user.photoURL;
              
                ///console.log(result);

                var data = {
                    name,
                    email,
                    auth,
                    photo
                }
                console.log(data)
                store.dispatch(checkUser(data));

            }).catch((err) => {
                console.log(err);
            });

        }}>

        </Button>
    </View>
}

/*
{"additionalUserInfo":
    {"isNewUser": false,
    "profile": 
        {"aud": "105090785872-okththiv1euvuskkot8sbe1s4eg7n91d.apps.googleusercontent.com",
         "azp": "105090785872-dvkr1ufnm8bo6ioq2p753opg67qj5qjt.apps.googleusercontent.com",
          "email": "naiaynaylan@gmail.com", "email_verified": true, "exp": 1609676540, 
          "family_name": "Nalyanya", 
          "given_name": "Ian", 
          "iat": 1609672940, 
          "iss": "https://accounts.google.com",
          "locale": "en",
          "name": "Ian Nalyanya", 
          "picture": "https://lh3.googleusercontent.com/a-/AOh14GgqYwwoY3BvH28N4zSERejF5LQqHSRak-wIqgBq4w=s96-c",
          "sub": "116273093546062659561"}, "providerId": "google.com"}, 
    "user": {"displayName": "Ian Nalyanya", "email": "naiaynaylan@gmail.com", "emailVerified": true, "isAnonymous": false, "metadata": [Object], "phoneNumber": null, "photoURL": "https://lh3.googleusercontent.com/a-/AOh14GgqYwwoY3BvH28N4zSERejF5LQqHSRak-wIqgBq4w=s96-c", "providerData": [Array], "providerId": "firebase", "uid": "CyOISBkYQwNxVkxKILtylMEe6mG2"}}


*/