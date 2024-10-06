import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  forgotPassword: {
    width: "90%",
    alignItems: "flex-end",
    marginTop: 6,
  },
  forgotPasswordText: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
    width: "90%",
  },
  createAccount: {
    position: "absolute",
    bottom: height * 0.12,
    flexDirection: "row",
  },
  createAccountTitle: {
    fontFamily: theme.fonts.medium,
  },
  createAccountRegister: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
  },
});
