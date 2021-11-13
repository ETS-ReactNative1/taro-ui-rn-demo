import { View, Text } from '@tarojs/components';
import useStorage from '@/taro-react-hooks/useStorage';

function Comp2() {
  const { data, update } = useStorage('test_key', 0);

  return (
    <View
      onClick={async () => {
        await update(data + 1);
      }}
    >
      <Text>Comp2-{data}</Text>
    </View>
  );
}

export default Comp2;
