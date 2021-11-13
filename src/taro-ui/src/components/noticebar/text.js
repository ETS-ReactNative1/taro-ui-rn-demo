import React from "react";
import {Text} from "@tarojs/components";
import classNames from "classnames";
import '../../style/components/noticebar.scss';

function NoticeText({ text, marquee, single }) {
  if (React.isValidElement(text)) {
    return text;
  }

  return (
    <Text
      className={classNames({
        'at-noticebar__content-text__text': true,
        'at-noticebar--marquee__content-text__text': marquee,
        'at-noticebar--single__content-text__text': !marquee && single,
      })}
    >
      {text}
    </Text>
  );
}

export default NoticeText;
