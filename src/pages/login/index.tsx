import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Button, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { StackType } from "../../routes/routes";

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const { goBack, navigate } = useNavigation<StackType>();

  function validateForm(){
    if(email == "") {
      setErrorEmail(true)
      return
    }
    if(password == "") {
      setErrorPassword(true)
      return
    }
  }

  return (
    <View style={styles.container}>
      <Input
        title="Email"
        icon="envelope-o"
        error={errorEmail}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChange={() => setErrorEmail(false)}
        onChangeText={setEmail}
      />
      <Input
        title="Senha"
        icon="lock"
        eye={hidePass ? "eye" : "eye-slash"}
        secureTextEntry={hidePass}
        onPrees={() => setHidePass(!hidePass)}
        error={errorPassword}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChange={() => setErrorPassword(false)}
        onChangeText={setPassword}
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <Button title="Cancelar" secondary onPress={() => goBack()} />
        <Button title="Entrar" onPress={validateForm}/>
      </View>
      <View style={styles.createAccount}>
        <Text style={styles.createAccountTitle}>Ainda não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigate("register")}>
          <Text style={styles.createAccountRegister}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
