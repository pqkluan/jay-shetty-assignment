import React, { ComponentProps, PropsWithChildren } from 'react';
import { StyleProp, ViewStyle, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import { ThemedStatusBar } from './ThemedStatusBar';

type Props = PropsWithChildren<{
  edges?: SafeAreaViewProps['edges'];
  scheme?: ComponentProps<typeof ThemedStatusBar>['scheme'];
  containerStyle?: StyleProp<ViewStyle>;
}>;

type State = {
  hasError: boolean;
};

export class ScreenWrap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error('ScreenWrap.componentDidCatch', error, errorInfo);
  }

  render(): React.ReactNode {
    const { scheme = 'light', edges, containerStyle, children } = this.props;

    if (this.state.hasError) {
      return <Text>{'UI view has crashed, please reload!'}</Text>;
    }

    return (
      <SafeAreaView edges={edges} style={styles.safeAreaView}>
        <ThemedStatusBar scheme={scheme} />
        <View style={[styles.container, containerStyle]}>{children}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
});
