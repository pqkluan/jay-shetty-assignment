import React, { FC, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Colors } from '../../design/Colors';
import { ProgressiveImage } from '../../shared/components/ProgressiveImage';
import { Spacing } from '../../shared/components/Spacing';
import { Text } from '../../shared/components/Text';
import { GOLDEN_RATIO } from '../../shared/constants';

import { Workshop } from '../types/Workshop';

import { TagChips } from './TagChips';
import { VideoDurationChip } from './VideoDurationChip';

type Props = {
  workshop: Workshop;
  onPress: (workshopId: string) => void;
};

export const WorkshopListItem: FC<Props> = (props) => {
  const { workshop, onPress } = props;
  const { workshopId, thumbnail: uri, title, tags, duration } = workshop;

  const handlePress = useCallback(() => onPress(workshopId), [onPress, workshopId]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
        <View style={styles.thumbnailWrap}>
          <ProgressiveImage source={{ uri }} style={styles.thumbnail} />
          <VideoDurationChip duration={duration} />
        </View>

        <View style={styles.subContainer}>
          <TagChips tags={tags} />
          <Spacing size={8} />
          <Text weight="600">{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,

    backgroundColor: Colors.White,
    borderRadius: 8,

    elevation: 8,
    shadowColor: Colors.Black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  thumbnailWrap: {},
  thumbnail: {
    width: '100%',
    height: undefined,
    aspectRatio: GOLDEN_RATIO,

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  subContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
