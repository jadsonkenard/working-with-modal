import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
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
