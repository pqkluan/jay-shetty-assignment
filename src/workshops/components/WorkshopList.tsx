import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';

import { Workshop } from '../types/Workshop';
import { useFetchWorkshops } from '../hooks/useFetchWorkshops';

import { WorkshopListItem } from './WorkshopListItem';

type Props = {
  onItemPress: (workshopId: string) => void;
};

export const WorkshopList: FC<Props> = (props) => {
  const { onItemPress } = props;

  const { workshops } = useFetchWorkshops();

  const renderItem = useCallback<ListRenderItem<Workshop>>(
    ({ item }) => <WorkshopListItem workshop={item} onPress={onItemPress} />,
    [onItemPress],
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={workshops}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

const keyExtractor = (item: Workshop) => item.workshopId;
const ItemSeparatorComponent = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 16,
  },
  separator: {
    height: 16,
  },
});
