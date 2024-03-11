import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

import { ScreenProps } from '../navigation/types/ScreenProps';
import { ScreenWrap } from '../components/ScreenWrap';

export const WorkshopDetailsScreen: FC<ScreenProps<'WorkshopDetailsScreen'>> = (props) => {
  const { route } = props;
  const { workshopId } = route.params;

  return (
    <ScreenWrap containerStyle={styles.container}>
      <Text>{'Details' + workshopId}</Text>
    </ScreenWrap>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
