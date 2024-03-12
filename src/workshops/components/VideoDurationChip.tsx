import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../../design/Colors';
import { getHexAlphaValue } from '../../shared/utils/getHexAlphaValue';
import { Text } from '../../shared/components/Text';

type Props = {
  duration: string;
};

export const VideoDurationChip: FC<Props> = (props) => {
  const { duration } = props;

  return (
    <View style={styles.durationWrap}>
      <Text color={Colors.White} size={12} weight="500">
        {duration}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  durationWrap: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    paddingVertical: 1.5,
    paddingHorizontal: 6,

    backgroundColor: Colors.Black + getHexAlphaValue(50),
  },
});
