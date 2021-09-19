/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ListaScreen } from '../screens/ListaScreen';
import { MapsScreen } from '../screens/MapsScreen';

import { colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Lista') {
          iconName = 'list-outline';

        } else if (route.name === 'Mapa') {
          iconName = 'map-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colores.primary,
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {fontSize: 15},
      tabBarStyle:{ borderTopColor: colores.primary, borderTopWidth: 2},
    })}
    >
      <Tab.Screen name="Lista" component={ListaScreen} />
      <Tab.Screen name="Mapa" component={MapsScreen} />
    </Tab.Navigator>
  );
}
