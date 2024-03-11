import React, { FC } from 'react';
import { StatusBar } from 'react-native';

type Props = {
  scheme: 'dark' | 'light';
};

export const ThemedStatusBar: FC<Props> = (props) => {
  const { scheme } = props;

  if (scheme === 'light') {
    return <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />;
  }

  if (scheme === 'dark') {
    return <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />;
  }

  return null;
};
