
import { useState, useReducer } from 'react';
//import axios from 'axios';

import createPersistedReducer from 'use-persisted-reducer';

export const usePersistedReducer = createPersistedReducer('hyp');



export const initialContentState = {
    auth: false,
    tokenSent:false,
    fcmToken:null,
    firstName: null,
    secondName: null,
    email: null,
    wish: [],
    history: [],
    myOrders: [],
    cart: [],
    mainAddress: '',
    otherAddress: '',

}


export function contentReducer(state, action) {
    switch (action.type) {
        case 'CHECK_USER':
            return {
                ...state,
                auth: action.auth,
                firstName: action.firstName,
                secondName: action.secondName,
                email: action.email,

            };

        case 'LOAD_ORDERS':
            return {
                ...state,
                myOrders: action.myOrders
            };

        case 'LOAD_HISTORY':
            return {
                ...state,
                history: action.history
            };


        case 'LOAD_ADDRESS':
            return {
                ...state,
                mainAddress: action.mainAddress,
                otherAddress: action.otherAddress,
            };


        case 'LOAD_LOCALITIES':
            return {
                ...state,
                localities: action.localities
            };

        case 'LOAD_PIN':
            return {
                ...state,
                pin: action.pin
            };

        case 'LOAD_MY_LOCALITY':
            return {
                ...state,
                myLocality: action.myLocality
            };

        case 'LOAD_MY_CART':
            return {
                ...state,
                cart: action.cart
            };

        case 'LOAD_MY_WISH':
            return {
                ...state,
                wish: action.wish
            };

            case 'LOAD_FCM_TOKEN':
                return {
                    ...state,
                    fcmToken: action.fcmToken
                };

                case 'LOAD_FCM_STATUS':
                    return {
                        ...state,
                        tokenSent: action.tokenSent
                    };
        default:
            return state;
    }
}


export const checkUser = (data) => {
    return {
        type: 'CHECK_USER',
        auth: data.auth,
        firstName: data.firstName,
        secondName: data.lastName,
        phone: data.phone,
        email: data.email,
    };
}


export const loadToken = (fcmToken) => {
    return {
        type: 'LOAD_FCM_TOKEN',
        fcmToken: fcmToken,
    };
}


export const tokenSent = (tokenSent) => {
    return {
        type: 'LOAD_FCM_STATUS',
        tokenSent: tokenSent,
    };
}

export const savewish = (wish) => {
    return {
        type: 'LOAD_MY_wish',
        wish: wish,
    };
}


export const selectMyLocality = (myLocality) => {
    return {
        type: 'LOAD_MY_LOCALITY',
        myLocality: myLocality,
    };
}

export const selectMyAddress = (mainAddress, otherAddress) => {
    return {
        type: 'LOAD_ADDRESS',
        mainAddress: mainAddress,
        otherAddress: otherAddress,
    };
}

export const checkCart = (cart) => {
    //console.log(cart);
    return {
        type: 'LOAD_MY_CART',
        cart: cart,
    };
}

export const loadHistory = (history) => {
    //console.log(cart);
    return {
        type: 'LOAD_HISTORY',
        history: history,
    };
}

//LOAD_HISTORY