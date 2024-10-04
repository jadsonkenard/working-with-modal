import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../theme";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    height: height * 0.07,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    paddingHorizontal: 6,
    // backgroundColor: "red",
  },
  viewTitle: {
    width: "90%",
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 18,
    color: theme.colors.primary,
    marginVertical: -5
  },
  content: {
    width: "80%",
    height: "100%",
    // backgroundColor: "blue",
  },
  icon: {
    height: "100%",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  eye: {
    height: "100%",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
