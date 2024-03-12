import React, { FC, useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';

import { Colors } from '../../design/Colors';
import { Text } from '../../shared/components/Text';
import { useFetchWorkshops } from '../hooks/useFetchWorkshops';
import { Workshop } from '../types/Workshop';

import { WorkshopListItem } from './WorkshopListItem';

type Props = {
  onItemPress: (workshopId: string) => void;
};

export const WorkshopList: FC<Props> = (props) => {
  const { onItemPress } = props;

  const { workshops, isError, isFetching, isFetchingInitial, hasNextPage, fetchNextPage, refetch } =
    useFetchWorkshops();

  const renderItem = useCallback<ListRenderItem<Workshop>>(
    ({ item }) => <WorkshopListItem workshop={item} onPress={onItemPress} />,
    [onItemPress],
  );

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const onEndReached = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const ListFooterComponent = useMemo<JSX.Element | null>(() => {
    if (isFetchingInitial) return null;
    return hasNextPage ? <LoadingIndicator /> : <NoMoreMessage />;
  }, [isFetchingInitial, hasNextPage]);

  if (isFetchingInitial) return <LoadingIndicator />;

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      keyExtractor={keyExtractor}
      data={workshops}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} colors={[Colors.Salmon]} />
      }
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={ListFooterComponent}
      ListHeaderComponent={isError ? <ErrorMessage /> : null}
      maxToRenderPerBatch={5}
      initialNumToRender={5}
      windowSize={10}
      onEndReached={onEndReached}
    />
  );
};

const keyExtractor = (item: Workshop) => item.workshopId;
const ItemSeparatorComponent = () => <View style={styles.separator} />;
const LoadingIndicator = () => (
  <View style={styles.footer}>
    <ActivityIndicator size="large" color={Colors.Salmon} />
  </View>
);
const ErrorMessage = () => (
  <Text color={Colors.MadderLake} center>
    {'An error occurred while fetching workshops'}
  </Text>
);
const ListEmptyComponent = () => (
  <Text color={Colors.MadderLake} center>
    {"There's no workshop available at the moment"}
    {'\n😔'}
  </Text>
);
const NoMoreMessage = () => (
  <View style={styles.footer}>
    <Text weight="500" marginTop={16} center>
      {'You reached the end'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 16,
  },
  separator: {
    height: 16,
  },
  footer: {
    marginTop: 16,

    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
