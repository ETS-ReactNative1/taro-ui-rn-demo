import {Text, View} from "@tarojs/components";
// import { useFonts } from 'expo-font';
import classNames from "classnames";
import '../../../style/components/countdown.scss';

function formatNum(num: number): string {
  return num <= 9 ? `0${num}` : `${num}`
}

function AtCountdownItem({ num, separator, isCard = false }) {
  // const [loaded] = useFonts({
  //   // @ts-ignore
  //   Steelfish: require('../countDownFont.ttf'),
  // });
  // if (!loaded) {
  //   return null;
  // }
  return (
    <View className='at-countdown__item'>
      <View
        className={classNames({
          'at-countdown__time-box': true,
          'at-countdown__time-box--card': isCard,
        })}
      >
        <Text
          className={classNames({
            'at-countdown__time': true,
            'at-countdown__time--card': isCard,
          })}
          // style={{
          //   fontFamily: 'Steelfish',
          // }}
        >
          {formatNum(num)}
        </Text>
      </View>
      <Text className='at-countdown__separator'>{separator}</Text>
    </View>
  )
}

export default AtCountdownItem;
