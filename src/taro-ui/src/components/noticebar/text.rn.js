import React from "react";
import {Text} from "@tarojs/components";
import classNames from "classnames";
import TextTicker from 'react-native-text-ticker'
import '../../style/components/noticebar.scss';

function NoticeText({ text, marquee, single }) {
  if (React.isValidElement(text)) {
    return text;
  }

  if (marquee) {
    return (
      <TextTicker
        style={{ fontSize: 24, backgroundColor: 'red' }}
        duration={3000}
        loop
        bounce
        repeatSpacer={50}
        marqueeDelay={1000}
      >
        Super long piece of text is long. The quick brown fox jumps over the lazy dog.
      </TextTicker>
    );
  }

  return (
    <Text
      className={classNames({
        'at-noticebar__content-text__text': true,
        'at-noticebar--marquee__content-text__text': marquee,
        'at-noticebar--single__content-text__text': !marquee && single,
      })}
      numberOfLines={single ? 1 : 999}
    >
      {text}
    </Text>
  );
}

export default NoticeText;
