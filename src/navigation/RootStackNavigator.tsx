import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { WorkshopDetailsScreen } from '../workshops/screens/WorkshopDetailsScreen';
import { WorkshopListingScreen } from '../workshops/screens/WorkshopListingScreen';

import { RootStackParamList } from './types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackScreenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  animation: 'fade',
  headerShadowVisible: true,
  fullScreenGestureEnabled: true,
  gestureEnabled: true,
  headerBackTitleVisible: false,
};

export const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={'WorkshopListingScreen'}
        component={WorkshopListingScreen}
        options={{ title: 'Workshops & Meditations' }}
      />
      <Stack.Screen
        name={'WorkshopDetailsScreen'}
        component={WorkshopDetailsScreen}
        options={{ title: 'Genius Workshop' }}
      />
    </Stack.Navigator>
  );
};
