import { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components";

export function Login() {
  const [error, setError] = useState(true);
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <Input title="Email" icon="envelope-o" error={error} />
      <Input
        title="Senha"
        icon="lock"
        eye={hidePass ? "eye" : "eye-slash"}
        secureTextEntry={hidePass}
        onPrees={() => setHidePass(!hidePass)}
        error
      />
    </View>
  );
}
