import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AnsiComponent } from 'react-native-ansi-view';

const lines = [
  '\u001b[1;32m * \u001b[0m\u001b[1;37mLIBS         libuv/1.42.0 OpenSSL/1.1.1l hwloc/2.5.1rc1-git\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mHUGE PAGES   \u001b[0m\u001b[1;32msupported\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37m1GB PAGES    \u001b[0m\u001b[1;33munavailable\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mCPU          ARMv8 (1)\u001b[0m \u001b[1;32m64-bit\u001b[0m \u001b[1;32mAES\u001b[0m',
  '\u001b[1;37m                \u001b[0m\u001b[1;30mL2:\u001b[0m\u001b[1;37m0.0 MB\u001b[0m\u001b[1;30m L3:\u001b[0m\u001b[1;37m0.0 MB\u001b[0m\u001b[1;36m 1\u001b[0mC\u001b[1;30m/\u001b[0m\u001b[1;36m4\u001b[0mT\u001b[1;30m NUMA:\u001b[0m\u001b[1;36m1\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mMEMORY       \u001b[0m\u001b[1;36m1.9/2.0\u001b[0m\u001b[0;36m GB\u001b[0m\u001b[1;30m (96%)\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mDONATE       \u001b[0m\u001b[1;37m\u001b[1;31m0%\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.127\u001b[0m] \u001b[100m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35margon2/chukwav2\u001b[1;37m Preparation \u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.127\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m use \u001b[1;37margon2\u001b[0m implementation \u001b[1;33mdefault\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.142\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[0;33m stopped\u001b[0m\u001b[1;30m (15 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.142\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m use profile \u001b[44m\u001b[1;37m argon2 \u001b[0m\u001b[1;37m (\u001b[1;36m4\u001b[0m\u001b[1;37m threads)\u001b[0m scratchpad \u001b[1;36m1024 KB\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.149\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[1;32m READY\u001b[0m threads \u001b[1;36m24/24 (4)\u001b[0m huge pages \u001b[1;31m0% 0/4\u001b[0m memory \u001b[1;36m4096 KB\u001b[0m\u001b[1;30m (7 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.150\u001b[0m] \u001b[100m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35margon2/chukwav2\u001b[1;37m Starting test \u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.155\u001b[0m] \u001b[100m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35mrx/0\u001b[1;37m Preparation \u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[0;33m stopped\u001b[0m\u001b[1;30m (16 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;35minit dataset\u001b[0m algo \u001b[1;37mrx/0 (\u001b[0m\u001b[1;36m4\u001b[0m\u001b[1;37m threads)\u001b[0m\u001b[1;30m seed 0000000000000000...\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[0;31m\u001b[0m\u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;31mfast RandomX mode disabled by config\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[0;33m\u001b[0m\u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;33mfailed to allocate RandomX dataset, switching to slow mode\u001b[1;30m (0 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:06\u001b[1;30m.969\u001b[0m] \u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;32mdataset ready\u001b[0m\u001b[1;30m (1796 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:06\u001b[1;30m.969\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m use profile \u001b[44m\u001b[1;37m rx \u001b[0m\u001b[1;37m (\u001b[1;36m4\u001b[0m\u001b[1;37m threads)\u001b[0m scratchpad \u001b[1;36m2048 KB\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:06\u001b[1;30m.971\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[1;32m READY\u001b[0m threads \u001b[1;36m28/28 (4)\u001b[0m huge pages \u001b[1;31m0% 0/4\u001b[0m memory \u001b[1;36m8192 KB\u001b[0m\u001b[1;30m (3 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:07\u001b[1;20m.106\u001b[4m] \u001b[1;36m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35mrx/0\u001b[1;37m Starting test \u001b[0m\u001b[0m',
];

const ansiText =
  '\u001b[3m\u001b[38;5;196m\u001b[4mHello\u001b[39m \u001b[48;5;226m\u001b[7mWorld\u001b[49m\u001b[44;1m A \u001b[45;1m B \u001b[46;1m C \u001b[0m \u001b[47;1m D \u001b[1000D  \u001b[44;1m A \u001b[45;1m B \u001b[46;1m C \u001b[47;1m D \u001b[1000D [NEW';

export default function App() {
  return (
    <View style={styles.container}>
      {lines.map((line, index) => (
        <AnsiComponent
          textStyle={styles.defaultText}
          containerStyle={styles.line}
          ansi={line}
          key={`k-${index}`}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    backgroundColor: 'black',
  },
  defaultText: {
    color: 'white',
  },
});
