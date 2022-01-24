import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewProps } from 'react-native';
import Anser from 'anser';
import { applyAll } from './styles';

export type AnsiComponentProps = {
  ansi: string;
  containerStyle?: ViewProps;
};

const applyStyle = (item: Anser.AnserJsonEntry): TextStyle =>
  applyAll({ style: {}, item }).style;

export const AnsiComponent: React.FC<AnsiComponentProps> = ({
  ansi,
  containerStyle = {},
}) => {
  const parsedAnsi = React.useMemo<Anser.AnserJsonEntry[]>(
    () => Anser.ansiToJson(ansi, { remove_empty: true }),
    [ansi]
  );

  return (
    <View style={[styles.line, containerStyle]}>
      {parsedAnsi.map((item: Anser.AnserJsonEntry) => (
        <Text style={applyStyle(item)}>{item.content}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
  },
});
