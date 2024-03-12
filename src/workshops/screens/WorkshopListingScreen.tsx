import React, { FC, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { ScreenWrap } from '../../shared/components/ScreenWrap';
import { ScreenProps } from '../../navigation/types/ScreenProps';

import { WorkshopList } from '../components/WorkshopList';

export const WorkshopListingScreen: FC<ScreenProps<'WorkshopListingScreen'>> = (props) => {
  const { navigation } = props;

  const handleItemPress = useCallback(
    (workshopId: string) => {
      navigation.navigate('WorkshopDetailsScreen', { workshopId });
    },
    [navigation],
  );

  return (
    <ScreenWrap containerStyle={styles.container} edges={['bottom']}>
      <WorkshopList onItemPress={handleItemPress} />
    </ScreenWrap>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
