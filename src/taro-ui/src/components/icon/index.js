import IconFont from '../icon-font';

// TaroUI的ICON找不到开源的源文件，只能自己做一层映射了
const map = {
  analytics: 'rise',
  bell: 'bell',
  // TODO https://taro-ui.jd.com/#/docs/icon 太多了，找时间人工处理。。
};

function AtIcon({ value, size, color = '#333' }) {
  return (<IconFont name={map[value] === undefined ? value : map[value]} size={size} color={color} />);
}

export default AtIcon;
