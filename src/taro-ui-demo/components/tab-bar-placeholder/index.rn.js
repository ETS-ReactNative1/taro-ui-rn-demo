import { View } from '@tarojs/components'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

function TabBarPlaceholder() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View
      style={{
        width: '100%',
        height: tabBarHeight,
      }}
    />
  );
}

export default TabBarPlaceholder;
