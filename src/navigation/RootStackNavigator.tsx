import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { WorkshopDetailsScreen } from '../screens/WorkshopDetailsScreen';
import { WorkshopListingScreen } from '../screens/WorkshopListingScreen';

import { RootStackParamList } from './types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackScreenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  animation: 'fade',
};

export const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={'WorkshopListingScreen'}
        component={WorkshopListingScreen}
        options={{ title: 'Workshops' }}
      />
      <Stack.Screen name={'WorkshopDetailsScreen'} component={WorkshopDetailsScreen} />
    </Stack.Navigator>
  );
};
