import { View, Text } from '@tarojs/components'
import '../../../../style/components/calendar.scss'

const days = [
  '日',
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
];

function AtCalendarHeader() {
  return (
    <View className='at-calendar__header'>
      <View className='at-calendar__header__flex'>
        {days.map((day, i) => {
          return (
            <View className='at-calendar__header__flex-item' key={`${i}-${day}`}>
              <Text className='at-calendar__header__flex-item__text'>{day}</Text>
            </View>
          );
        })}
      </View>
    </View>
  )
}

export default AtCalendarHeader;
