import { View, Text } from "react-native";
import { styles } from "./styles";
import { Button, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { StackType } from "../../routes/routes";


export function Login() {
    const { navigate } = useNavigation<StackType>();

  return (
    <View style={styles.container}>
      <Input></Input>
    </View>
  );
}
