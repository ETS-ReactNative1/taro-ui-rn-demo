import { View } from '@tarojs/components';

function Header({ title, desc }) {
  return (
    <View className='page-head'>
      <View className='page-head-title'>{title}</View>
      <View className='page-head-line' />
      {desc ?
        (<View className='page-head-desc'>{desc}</View>)
        : null}
    </View>
  );
}

export default Header;
