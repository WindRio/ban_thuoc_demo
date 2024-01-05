import { Modal, ModalBackdrop, Spinner } from "@gluestack-ui/themed";
import { color } from "../../utils";

const LoadingCommon = (props) => {
  const {isOpen} = props
  return (
    <Modal
      isOpen={isOpen}
    >
      <ModalBackdrop/>
      <Spinner size="large" color={color.darkGreen}/>
    </Modal>
  )
}

export default LoadingCommon;