import React from 'react';
import type { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackNavigator } from './navigation/RootStackNavigator';

export const App: FC = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
