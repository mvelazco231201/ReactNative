/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CharacterScreen from '../../screens/CharacterScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import PhraseScreen from '../../screens/PhraseScreen';

const Tab = createMaterialTopTabNavigator();

const Component = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Character" component={CharacterScreen} />
    <Tab.Screen name="Phrase" component={PhraseScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
  );
};

export default Component;
