import React, { FC, useCallback, useRef } from 'react';
import { Animated, View, StyleSheet, ActivityIndicator, ImageProps } from 'react-native';

import { Colors } from '../../design/Colors';
import { getHexAlphaValue } from '../utils/getHexAlphaValue';

interface Props extends ImageProps {
  hideActivityIndicator?: boolean;
}

export const ProgressiveImage: FC<Props> = (props) => {
  const { source, style, hideActivityIndicator = false, ...imageProps } = props;

  const opacityRef = useRef(new Animated.Value(1));

  const onImageLoad = useCallback(() => {
    Animated.timing(opacityRef.current, { toValue: 0, useNativeDriver: true }).start();
  }, []);

  const reversedOpacity = opacityRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <View style={[style, styles.container]}>
      <Animated.View style={[styles.indicatorWrap, style, { opacity: opacityRef.current }]}>
        {hideActivityIndicator ? null : <ActivityIndicator size={'small'} color={Colors.Salmon} />}
      </Animated.View>

      <Animated.Image
        source={source}
        style={[styles.imageWrap, style, { opacity: reversedOpacity }]}
        {...imageProps}
        onLoad={onImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.RaisinBlack + getHexAlphaValue(16),
  },
  indicatorWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrap: StyleSheet.absoluteFillObject,
});
