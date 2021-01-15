import 'react-native-gesture-handler';
import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor, checkUser } from './redux'
import { Provider, useDispatch } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './components/Home';
import { Favourite } from './components/Favourite';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { Splash } from './components/Splash';
import { Add } from './components/Product/Add';
import { Update } from './components/Product/Update';



const App = () => {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const [logged, setLogged] = useState(false);

  store.subscribe(() => {

    //Check if the user is logged in
    //Since the state is stored asynchronously, subscribing to change will ensure that we detect auth changes as soon as they occur
    var authState = store.getState().auth;
    authState ? setLogged(true) : setLogged(false);

  });

  auth().onAuthStateChanged((user) => {

    if (user) {
      //console.log(user);
      //store.dispatch();
      var name = user.displayName;
      var email = user.email;
      var auth = user.uid;
      var photo = user.photoURL;

      ///console.log(result);

      var data = {
        name,
        email,
        auth,
        photo
      }
      // console.log(data)
      store.dispatch(checkUser(data));
    } else {
      var data = {
        name: null,
        email: null,
        auth: null,
        photo: null
      }
      store.dispatch(checkUser(data));
    }

  });

  const HomeStack = () => {
    return <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigator, route }) => ({
          title: 'Home'
        })}
      />
    </Stack.Navigator>
  }


  const CategoryStack = () => {
    return <Stack.Navigator>
      <Stack.Screen
        component={Favourite}
        name="Favourite"
        options={({ navigator, route }) => ({
          title: 'Favourite',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  }


  const ProfileStack = () => {
    return <Stack.Navigator>

<Stack.Screen
        component={Add}
        name="Add"
        options={({ navigator, route }) => ({
          title: 'New Product'
        })}
      />

      <Stack.Screen
        component={Profile}
        name="Profile"
        options={({ navigator, route }) => ({
          title: 'Profile'
        })}
      />

      <Stack.Screen
        component={Update}
        name="Update"
        options={({ navigator, route }) => ({
          title: 'Edit Product'
        })}
      />
    </Stack.Navigator>
  }

  const TabStack = () => {
    return <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}>
      <Tab.Screen name="Home" component={HomeStack}


        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" color={color} size={size} />
          ),
        }}

      />
      <Tab.Screen name="Category" component={CategoryStack}


        options={{

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="grid" color={color} size={size} />

          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStack} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="user" color={color} size={size} />

        ),
      }}
      />
    </Tab.Navigator>
  }
  return (


    <NavigationContainer>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={<Splash />}
        >
          {console.log(logged)}
          {logged ? TabStack() : <Login />}

        </PersistGate>
      </Provider>

    </NavigationContainer>

  );
};



export default App;
