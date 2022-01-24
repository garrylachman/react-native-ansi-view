import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AnsiComponent } from 'react-native-ansi-view';

const ansiText =
  '\u001b[3m\u001b[38;5;196m\u001b[4mHello\u001b[39m \u001b[48;5;226m\u001b[7mWorld\u001b[49m\u001b[44;1m A \u001b[45;1m B \u001b[46;1m C \u001b[0m \u001b[47;1m D \u001b[1000D  \u001b[44;1m A \u001b[45;1m B \u001b[46;1m C \u001b[47;1m D \u001b[1000D [NEW';

export default function App() {

  return (
    <View style={styles.container}>
      <AnsiComponent ansi={ansiText}></AnsiComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
