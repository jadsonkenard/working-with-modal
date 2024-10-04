import { View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components";

export function Login() {
  return (
    <View style={styles.container}>
      <Input title="Email" icon="envelope-o" error />
      <Input title="Senha" icon="lock" eye="eye" />
    </View>
  );
}
