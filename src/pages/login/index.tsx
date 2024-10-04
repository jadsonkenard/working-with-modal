import { View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components";

export function Login() {
  return (
    <View style={styles.container}>
      <Input icon="envelope-o" />
      <Input icon="envelope-o" eye="eye" />
    </View>
  );
}
