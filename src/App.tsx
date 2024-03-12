import React from 'react';
import type { FC } from 'react';

import { RootStackNavigator } from './navigation/RootStackNavigator';
import { NavigationProvider } from './navigation/NavigationProvider';

export const App: FC = () => {
  return (
    <NavigationProvider>
      <RootStackNavigator />
    </NavigationProvider>
  );
};
