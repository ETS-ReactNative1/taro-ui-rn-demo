import {Button} from "@tarojs/components";
import classNames from 'classnames'
import '../../../style/components/modal.scss'

function AtModalButton({ title, onClick, index }) {
  return (
    <Button
      onClick={onClick}
      style={{ flex: 1 }}
      className={classNames(['at-modal__button', `at-modal__button-${index}`])}
    >
      {title}
    </Button>
  );
}

export default AtModalButton;
