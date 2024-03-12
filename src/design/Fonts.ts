import { TextStyle } from 'react-native';

type FontWeight = NonNullable<TextStyle['fontWeight']>;
type FontFamilySet = Record<FontWeight, string>;

const Poppins: FontFamilySet = {
  '100': 'Poppins-Thin',
  '200': 'Poppins-ExtraLight',
  '300': 'Poppins-Light',
  '400': 'Poppins-Regular',
  '500': 'Poppins-Medium',
  '600': 'Poppins-SemiBold',
  '700': 'Poppins-Bold',
  '800': 'Poppins-ExtraBold',
  '900': 'Poppins-Black',
  'bold': 'Poppins-Bold',
  'normal': 'Poppins-Regular',
};

export const Fonts = { Poppins } as const;
