/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useEffect } from 'react';
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
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListing from './src/screens/app/MyListing';
import ContactUs from './src/screens/app/ContactUs';
import FAQ from './src/screens/app/FAQ';
import PrivacyAndTerms from './src/screens/app/PrivacyAndTerms';

const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name='MyListing' component={MyListing} options={{ headerShown: false }} />
      <Stack.Screen name='CreateListing' component={CreateListing} options={{ headerShown: false }} />
      <Stack.Screen name='FAQ' component={FAQ} options={{ headerShown: false }} />
      <Stack.Screen name='ContactUs' component={ContactUs} options={{ headerShown: false }} />
      <Stack.Screen name='PrivacyAndTerms' component={PrivacyAndTerms} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

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
        name='ProfileStack'
        component={ProfileStack}
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

  useEffect(() => {

  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ?
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
