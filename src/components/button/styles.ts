import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height: height * 0.06,
    width: width * 0.40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
  },
});
