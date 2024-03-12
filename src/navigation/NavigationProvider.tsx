import React, { FC, PropsWithChildren } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';

import { Colors } from '../design/Colors';

type Props = PropsWithChildren;

export const NavigationProvider: FC<Props> = (props) => {
  const { children } = props;

  return (
    <NavigationContainer theme={CustomTheme} onReady={onReady}>
      {children}
    </NavigationContainer>
  );
};

const onReady = () => {
  console.log('Navigation is ready');
};

const CustomTheme: Theme = {
  colors: {
    primary: Colors.Salmon,
    border: Colors.Transparent,
    text: Colors.Jacarta,
    notification: Colors.MadderLake,
    card: Colors.White,
    background: Colors.Cultured,
  },
  dark: false,
};
