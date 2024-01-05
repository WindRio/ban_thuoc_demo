import {
    Button, ButtonGroup, ButtonText, Divider, Modal, ModalBackdrop, ModalBody, ModalContent, ModalFooter, ModalHeader
} from '@gluestack-ui/themed';
import { Text } from 'react-native';

import { buttonText, color, textConst } from '../../../utils';
import styles from './style';

export default function ConfirmOderCreationModal({ isOpen, onClose, onConfirm }) {

  const onPressClose = () => {
    onClose();
  };

  const onPressConfirm = () => {
    onConfirm();
  };

  return (<Modal isOpen={isOpen}>
    <ModalBackdrop onPress={onPressClose} />
    <ModalContent>
      <ModalHeader />
      <ModalBody>
        <Text>{textConst.CONFIRM_CREATE_ODER}</Text>
      </ModalBody>
      <Divider />
      <ModalFooter>
        <ButtonGroup>
          <Button style={styles.buttonRadius} bgColor={color.plumRed} onPress={onPressConfirm}>
            <ButtonText>{buttonText.BTN_CREATE_ORDER}</ButtonText>
          </Button>
          <Button style={styles.buttonRadius} action="secondary" variant="outline" onPress={onPressClose}>
            <ButtonText>{buttonText.BUTTON_CANCEL}</ButtonText>
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalContent>
  </Modal>)
}