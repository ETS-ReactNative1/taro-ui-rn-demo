import Swipeout from 'rc-swipeout';
import noop from 'lodash/noop';
import isEmpty from 'lodash/isEmpty';
import '../../style/components/swipe-action.scss'

function AtSwipeAction({ children, onClick = noop, options = [], disabled = false, autoClose = false }) {

  const rightButtons = [];
  options.map((item, index) => {
    const style = item.style ? {...item.style} : {};
    if (!isEmpty(style) && !style.color) {
      style.color = '#fff';
    }

    rightButtons.push({
      ...item,
      style,
      onPress: () => {
        onClick(item, index);
      },
    });
  });

  return (
    <Swipeout
      // left={[
      //   {
      //     text: 'reply',
      //     onPress:() => console.log('reply'),
      //     style: { backgroundColor: 'orange', color: 'white' },
      //   }
      // ]}
      disabled={disabled}
      style={{
        backgroundColor: 'transparent',
      }}
      right={rightButtons}
      autoClose={autoClose}
      // onOpen={() => console.log('open')}
      // onClose={() => console.log('close')}
    >
      {children}
    </Swipeout>
  );
}

export default AtSwipeAction;
