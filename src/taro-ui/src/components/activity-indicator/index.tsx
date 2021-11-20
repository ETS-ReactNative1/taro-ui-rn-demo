import classNames from 'classnames'
import { Text, View } from '@tarojs/components'
import AtLoading from '../loading/index'
import '../../style/components/activity-indicator.scss'

function AtActivityIndicator({ color = '#6190E8', size = 40, mode, content, isOpened = true, className }) {
  return (
    <View
      className={classNames(
        'at-activity-indicator',
        {
          'at-activity-indicator--center': mode === 'center',
          'at-activity-indicator--isopened': isOpened
        },
        className
      )}
    >
      <View className='at-activity-indicator__body'>
        {/*<Text>{size} {color}</Text>*/}
        <AtLoading size={size ? size : 40} color={color} />
      </View>
      {!!content && (
        <Text className='at-activity-indicator__content'>{content}</Text>
      )}
    </View>
  )
}

export default AtActivityIndicator;
