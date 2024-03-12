import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../../design/Colors';

type Props = {
  scheme: 'dark' | 'light';
};

export const ThemedStatusBar: FC<Props> = (props) => {
  const { scheme } = props;

  if (scheme === 'light')
    return <StatusBar backgroundColor={Colors.White} barStyle={'dark-content'} />;

  if (scheme === 'dark')
    return <StatusBar backgroundColor={Colors.Black} barStyle={'light-content'} />;

  return null;
};
