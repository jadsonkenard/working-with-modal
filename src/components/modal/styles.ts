import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { theme } from "../../theme";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(24,24,24,0.6)"
  },
  modalView: {
    position: "absolute",
    width: "100%",
    height: height * 0.4,
    bottom: 0,
    backgroundColor: theme.colors.black,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});
