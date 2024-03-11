import React, { FC } from 'react';
import { Button, StyleSheet } from 'react-native';

import { ScreenProps } from '../navigation/types/ScreenProps';
import { ScreenWrap } from '../components/ScreenWrap';

export const WorkshopListingScreen: FC<ScreenProps<'WorkshopListingScreen'>> = (props) => {
  const { navigation } = props;

  return (
    <ScreenWrap containerStyle={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('WorkshopDetailsScreen', { workshopId: '123456' })}
      />
    </ScreenWrap>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
