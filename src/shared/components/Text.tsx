import React, { FC, useMemo } from 'react';
import { Text as NativeText, StyleProp, TextProps, TextStyle } from 'react-native';

import { Colors } from '../../design/Colors';
import { Fonts } from '../../design/Fonts';

interface Props extends TextProps {
  /*
   * The color of the text.
   */
  color?: TextStyle['color'];

  /**
   * The size of the text.
   * Default is 14.
   */
  size?: TextStyle['fontSize'];

  /**
   * The weight of the text.
   * Default is '400'.
   */
  weight?: TextStyle['fontWeight'];

  /**
   * The font family of the text.
   * Default is 'Poppins'.
   */
  fontFamily?: keyof typeof Fonts;
}

export const Text: FC<Props> = (props) => {
  const {
    style: propStyle,
    color = Colors.Jacarta,
    size = 14,
    weight = '400',
    fontFamily = 'Poppins',
    ...textProps
  } = props;

  const combinedStyle = useMemo<StyleProp<TextStyle>>(() => {
    const style: TextStyle = {
      color,
      fontSize: size,
      fontFamily: Fonts[fontFamily][weight],
    };

    // More styling options can be handled here
    return [propStyle, style];
  }, [color, size, fontFamily, weight, propStyle]);

  return <NativeText style={combinedStyle} {...textProps} />;
};
