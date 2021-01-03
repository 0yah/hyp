import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

export const initialContentState = {
  auth: false,
  tokenSent: false,
  fcmToken: null,
  name: '',
  email: null,
  photo:'',
  wish: [],
  history: [],
  myOrders: [],
  cart: [],
  mainAddress: '',
  otherAddress: '',
  total: 0,
  country: '',
  region: '',
  items:[]
};

export function contentReducer(state = initialContentState, action) {
  switch (action.type) {
    case 'CHECK_USER':
      return {
        ...state,
        auth: action.auth,
        name: action.name,
        email: action.email,
        photo: action.photo,
      };

    case 'LOAD_ORDERS':
      return {
        ...state,
        myOrders: action.myOrders,
      };

    case 'LOAD_HISTORY':
      return {
        ...state,
        history: action.history,
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
        localities: action.localities,
      };

    case 'LOAD_PIN':
      return {
        ...state,
        pin: action.pin,
      };

    case 'LOAD_MY_LOCALITY':
      return {
        ...state,
        myLocality: action.myLocality,
      };

    case 'LOAD_MY_CART':
      return {
        ...state,
        cart: action.cart,
      };

    case 'LOAD_MY_WISH':
      return {
        ...state,
        wish: action.wish,
      };

    case 'LOAD_FCM_TOKEN':
      return {
        ...state,
        fcmToken: action.fcmToken,
      };

    case 'LOAD_FCM_STATUS':
      return {
        ...state,
        tokenSent: action.tokenSent,
      };
    default:
      return state;
  }
}

export const checkUser = (data) => {
  return {
    type: 'CHECK_USER',
    auth: data.auth,
    name: data.name,
    email: data.email,
    photo:data.photo,
  };
};

export const loadToken = (fcmToken) => {
  return {
    type: 'LOAD_FCM_TOKEN',
    fcmToken: fcmToken,
  };
};

export const tokenSent = (tokenSent) => {
  return {
    type: 'LOAD_FCM_STATUS',
    tokenSent: tokenSent,
  };
};

export const savewish = (wish) => {
  return {
    type: 'LOAD_MY_wish',
    wish: wish,
  };
};

export const selectMyLocality = (myLocality) => {
  return {
    type: 'LOAD_MY_LOCALITY',
    myLocality: myLocality,
  };
};

export const selectMyAddress = (mainAddress, otherAddress) => {
  return {
    type: 'LOAD_ADDRESS',
    mainAddress: mainAddress,
    otherAddress: otherAddress,
  };
};

export const checkCart = (cart) => {
  //console.log(cart);
  return {
    type: 'LOAD_MY_CART',
    cart: cart,
  };
};

export const loadHistory = (history) => {
  //console.log(cart);
  return {
    type: 'LOAD_HISTORY',
    history: history,
  };
};

//Saves the state to the local storage
const persistConfig = {
  key: 'hyp',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, contentReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

let persistor = persistStore(store);
export {store, persistor};
