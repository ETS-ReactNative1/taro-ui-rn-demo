import Taro from '@tarojs/taro';
import { useFonts, loadAsync } from 'expo-font';
import { Text } from 'react-native';

// TODO 最终还是不行，不知道为啥

loadAsync({
  iconfont: require('./font.ttf'),
});
const map = require('./font.json');

function AtIcon({
  customStyle = {},
  value,
  size = 24,
  color
}) {
  const [loaded] = useFonts({
    iconfont: require('./font.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Text
      style={{
        // fontFamily: 'iconfont',
        fontSize: Taro.pxTransform(size),
        color: color ? color : '#333',
        ...customStyle,
      }}
    >
      {String.fromCharCode(map[value] === undefined ? map.help : map[value])}
    </Text>
  );
}

export default AtIcon;
