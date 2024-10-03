import { PropsWithChildren } from "react";
import { Modal as AppModal, View } from "react-native";
import { styles } from "./styles";

type ModalProps = {
  visible: boolean;
};

export function Modal({ visible, children }: PropsWithChildren<ModalProps>) {
  return (
    <View>
      <AppModal animationType="slide" visible={visible} transparent>
        <View style={styles.container}>
          <View style={styles.modalView}>
            {children}
          </View>
        </View>
      </AppModal>
    </View>
  );
}
