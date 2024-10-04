import { View, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { StackType } from "../../routes/routes";

export function Register() {
  const { goBack } = useNavigation<StackType>();
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button title="voltar" onPress={() => goBack()} />
    </View>
  );
}
