import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import Splash from '../src/containers/onboarding/Splash';

const AppStack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => (
  <AppStack.Navigator initialRouteName="Splash" headerMode="none">
    <AppStack.Screen name="Splash" component={Splash} />
    <AppStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
  </AppStack.Navigator>
);
