import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button, Modal } from "../../components";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCallback, useState } from "react";
import { theme } from "../../theme";
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
          <Button title="Login" secondary onPress={() => navigate("login")} />
          <Button title="Cadastrar" onPress={() => navigate("register")} />
        </View>
      </Modal>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white
  },
  content: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  iconModal: {
    backgroundColor: theme.colors.green,
    borderRadius: 14,
    padding: 10,
    height: width * 0.13,
    width: width * 0.13,
  },
  buttonsModal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  titleModal: {
    fontFamily: theme.fonts.medium,
    fontSize: 22,
    color: theme.colors.white,
  },
  textModal: {
    fontFamily: theme.fonts.medium,
    fontSize: 18,
    color: theme.colors.white,
  },
});
