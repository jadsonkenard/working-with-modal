import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { Button, Loading, Modal } from "./src/components";
import { useState } from "react";
import { theme } from "./src/theme";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [fontsLoad] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light,
  });

  if (!fontsLoad) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Button title="Update" onPress={() => setVisible(true)} />
      <Modal visible={visible}>
        <View style={{alignItems: "center"}}>
      <Text style={styles.titleModal}>Update available</Text>
      <Text style={styles.textModal}>A new software version is available for dowmload</Text>
      </View>
        <View style={styles.buttonsModal}>
          <Button title="Close" secondary onPress={() => setVisible(false)} />
          <Button title="Close" isLoading onPress={() => setVisible(false)} />
        </View>
        
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsModal: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  titleModal: {
    fontFamily: theme.fonts.medium,
    fontSize: 22,
    color:theme.colors.white
  },
  textModal: {
    fontFamily: theme.fonts.medium,
    fontSize: 18,
    color:theme.colors.white
  }
});
