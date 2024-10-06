import { View, Text } from "react-native";
import { styles } from "./styles";
import { Button, Modal } from "../../components";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackType } from "../../routes/routes";

export function Home() {
  const [visible, setVisible] = useState(false);
  const { navigate } = useNavigation<StackType>();

  useFocusEffect(
    useCallback(() => {
      setVisible(false);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Button title="Começar" onPress={() => setVisible(true)} />
      <Modal visible={visible}>
        <View style={styles.content}>
          <View style={styles.iconModal}>
            <FontAwesome name="pied-piper" color={"white"} size={22} />
          </View>
          <Text style={styles.titleModal}>Update available</Text>
          <Text style={styles.textModal}>
            A new software version is available for dowmload
          </Text>
        </View>
        <View style={styles.buttonsModal}>
          <Button title="Cancelar" secondary onPress={() => setVisible(false)} />
          <Button title="Login" onPress={() => navigate("login")} />
        </View>
      </Modal>
    </View>
  );
}
