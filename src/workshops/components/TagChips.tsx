import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '../../shared/components/Text';
import { Colors } from '../../design/Colors';
import { Tag } from '../types/Tag';

type Props = {
  tags: Tag[];
};

export const TagChips: FC<Props> = (props) => {
  const { tags } = props;

  return (
    <View style={styles.row}>
      {tags.map((tag) => (
        <TagChip key={tag} tag={tag} />
      ))}
    </View>
  );
};

const TagChip: FC<{ tag: Tag }> = (props) => {
  const { tag } = props;

  const backgroundColor = tagColors[tag] ?? 'cornflowerblue';

  return (
    <View key={tag} style={[styles.container, { backgroundColor }]}>
      <Text size={11} weight={'500'}>
        {tag}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 8,

    flexDirection: 'row',
  },
  container: {
    marginRight: 4,

    paddingVertical: 1.5,
    paddingHorizontal: 6,

    borderRadius: 3.14,
  },
});

const tagColors: Record<Tag, string> = {
  'HEALTH': Colors.TealDeer,
  'PERSONAL': Colors.Crayola,
  'RELATIONSHIPS': Colors.CarnationPink,
  'SPIRITUALITY': Colors.MaximumBluePurple,
  'WORK': Colors.WinterWizard,
  'WORK & FINANCE': Colors.WinterWizard,
};
