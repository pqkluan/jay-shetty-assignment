import React, { FC, useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Colors } from '../../design/Colors';
import { Text } from '../../shared/components/Text';

import { Workshop } from '../types/Workshop';
import { GOLDEN_RATIO } from '../constants';

import { TagChips } from './TagChips';
import { Spacing } from '../../shared/components/Spacing';

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
          <Image source={{ uri }} style={styles.thumbnail} />
          <View style={styles.durationWrap}>
            <Text color={Colors.White} size={12} weight="500">
              {duration}
            </Text>
          </View>
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
  durationWrap: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    paddingVertical: 1.5,
    paddingHorizontal: 6,

    backgroundColor: 'rgba(0,0,0,0.5)',
  },
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
