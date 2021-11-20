import {View} from "@tarojs/components";
import Modal from "react-native-modal";
import AtActionSheetHeader from "./header";
import AtActionSheetBody from "./body";
import AtActionSheetFooter from "./footer";
import '../../style/components/action-sheet.scss'

function AtActionSheet({ children, title = '', cancelText = '', className, isOpened = false, onClose, onCancel }) {
  return (
    <Modal
      animationIn='fadeInUp'
      animationOut='fadeOutDown'
      isVisible={isOpened}
      hasBackdrop
      onModalHide={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <View className='at-action-sheet__container'>
        {!!title && <AtActionSheetHeader>{title}</AtActionSheetHeader>}
        <AtActionSheetBody>{children}</AtActionSheetBody>
        {!!cancelText && (
          <AtActionSheetFooter
            onClick={() => {
              onCancel && onCancel();
              onClose && onClose();
            }}
          >
            {cancelText}
          </AtActionSheetFooter>
        )}
      </View>
    </Modal>
  );
}

export default AtActionSheet;
