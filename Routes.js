/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/auth/SplashScreen';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Home from './src/screens/app/Home';
import { UserContext } from './App';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from './src/utils/colors';
import Product from './src/screens/app/Product';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      headerShown={false}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          elevation: 0,
        },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.disabled
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'bookmark' : 'bookmark-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function Routes() {

  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ?
          <>
            <Stack.Screen
              name='BottomTabs'
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Product'
              component={Product}
              options={{ headerShown: false }}
            />
          </>
          :
          <>
            <Stack.Screen
              name='SplashScreen'
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
            />
            <Stack.Screen
              name='SignIn'
              component={SignIn}
            />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
