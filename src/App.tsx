import React from 'react';
import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RootStackNavigator } from './navigation/RootStackNavigator';
import { NavigationProvider } from './navigation/NavigationProvider';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <RootStackNavigator />
      </NavigationProvider>
    </QueryClientProvider>
  );
};
