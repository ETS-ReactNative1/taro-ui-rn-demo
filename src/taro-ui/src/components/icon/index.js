import {Text} from '@tarojs/components';
import IconFont from '../icon-font';

// TaroUI的ICON找不到开源的源文件，只能自己做一层映射了
const map = {
  analytics: 'rise',
  bell: 'bell',
  blocked: 'stop',
  bookmark: 'book',
  'bullet-list': 'unorderedlist',
  'add-circle': 'plus-circle',
  'subtract-circle': 'minus-circle',
  add: 'plus',
  subtract: 'minus',
  clock: 'time-circle',
  'credit-card': 'creditcard',
  'download-cloud': 'cloud-download',
  'external-link': 'link',
  'heart-2': 'heart-fill',
  'star-2': 'star-fill',
  help: 'question-circle',
  'alert-circle': 'warning-circle',
  list: 'unorderedlist',
  money: 'moneycollect',
  'numbered-list': 'orderedlist',
  settings: 'setting',
  'shopping-bag': 'shopping',
  equalizer: 'sliders',
  'file-code': 'code',
  'file-new': 'file-add',
  'file-generic': 'file-exclamation',
  'file-jpg': 'file-image',
  'file-svg': 'file-image',
  'file-png': 'file-image',
  'font-color': 'font-colors',
  'text-italic': 'italic',
  'text-strikethrough': 'strikethrough',
  'text-underline': 'underline',
  'arrow-up': 'arrowup',
  'arrow-down': 'arrowdown',
  'arrow-left': 'arrowleft',
  'arrow-right': 'arrowright',
  'chevron-up': 'up',
  'chevron-down': 'down',
  'chevron-left': 'left',
  'chevron-right': 'right',
  // TODO https://taro-ui.jd.com/#/docs/icon 太多了，找时间人工处理。。
};

function AtIcon({ value, size = 48, color = '#333' }) {
  return (<IconFont name={map[value] === undefined ? value : map[value]} size={size} color={color} />);
}

export default AtIcon;
