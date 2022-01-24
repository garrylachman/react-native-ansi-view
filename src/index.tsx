import React from 'react';
import { Text, TextStyle } from 'react-native';
import Anser from 'anser';
import { applyAll } from './styles';

export type AnsiComponentProps = {
  ansi: string;
  containerStyle?: TextStyle;
  textStyle?: TextStyle;
};

const applyStyle = (
  item: Anser.AnserJsonEntry,
  defaultStyle: TextStyle
): TextStyle => applyAll({ style: { ...defaultStyle }, item }).style;

export const AnsiComponent: React.FC<AnsiComponentProps> = ({
  ansi,
  containerStyle = {},
  textStyle = {},
}) => {
  const parsedAnsi = React.useMemo<Anser.AnserJsonEntry[]>(
    () => Anser.ansiToJson(ansi, { remove_empty: true }),
    [ansi]
  );

  return (
    <Text style={containerStyle}>
      {parsedAnsi.map((item: Anser.AnserJsonEntry) => (
        <Text style={applyStyle(item, textStyle)}>{item.content}</Text>
      ))}
    </Text>
  );
};
