import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import indexScreen from './src/indexScreen';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import CreateContact from './src/screens/CreateContact';
import ContactDetail from './src/screens/ContactDetail';
import EditContact from './src/screens/EditContact';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from './src/colors/index';
// bottom bar
import { Ionicons } from '@expo/vector-icons';
import ShowContact from './src/screens/ShowContact';

const store = createStore(reducers, applyMiddleware(thunk));

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const ListStack = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="float"
    >
      <Stack.Screen
        name="Show"
        component={ShowContact}
        options={{ title: "Contact List", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Edit"
        component={EditContact}
        options={{ title: "Edit Contact", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Detail"
        component={ContactDetail}
        options={{ title: "Contact Detail", headerTitleAlign: "center" }}
      />

    </Stack.Navigator>
  )
};

const addStack = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="float"
    >
      <Stack.Screen
        name="Add"
        component={CreateContact}
        options={{ title: "Add Contact", headerTitleAlign: "center" }}
      />

    </Stack.Navigator>
  )
};

function MyTabs() {
  return (
    < Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={ListStack}
        options={{
          tabBarColor: Colors.primaryColor,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={23} color={color} />
          ),
        }}


      />

      <Tab.Screen
        name="Settings"
        component={addStack}
        options={{
          tabBarColor: Colors.accentColor,
          tabBarLabel: 'Add Contact',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator >
  );
}


export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>{MyTabs()}</NavigationContainer>
    </Provider>
  );
};