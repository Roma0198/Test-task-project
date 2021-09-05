import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../containers/HomeScreen';
import DetailsScreen from '../containers/DetailsScreen';
import FavoritesScreen from '../containers/FavoritesScreen';

import images from '../themes/images';

const HomeStack = createStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false
      })
      }
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator();

function FavoritesScreenStack() {
  return (
    <FavoritesStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false
      })
      }
    >
      <FavoritesStack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <FavoritesStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </FavoritesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? images.homeIconSelected
                : images.homeIcon;
            } else if (route.name === 'Favorite') {
              iconName = focused
                ? images.starIconSelected
                : images.starIcon;
            }

            return <Image source={iconName} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Favorite" component={FavoritesScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}