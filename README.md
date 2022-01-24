# react-native-ansi-view

React Native ANSI View

## Installation

```sh
npm install react-native-ansi-view
```

## Usage

```js
import { AnsiComponent } from 'react-native-ansi-view';

const ansiText =
  '\u001b[3m\u001b[38;5;196m\u001b[4mHello\u001b[39m \u001b[48;5;226m\u001b[7mWorld\u001b[49m\u001b[44;1m A \u001b[45;1m B \u001b[46;1m C \u001b[0m \u001b[47;1m D \u001b[1000D  \u001b[44;1m A \u001b[45;1m B \u001b[46;1m C \u001b[47;1m D \u001b[1000D [NEW';

<AnsiComponent ansi={ansiText}></AnsiComponent>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
