import React, { FC } from 'react';
import { View } from 'react-native';

type Props = {
  size: number;
  horizontal?: boolean;
};

export const Spacing: FC<Props> = (props) => {
  const { size, horizontal = false } = props;
  return <View style={horizontal ? { width: size } : { height: size }} />;
};
