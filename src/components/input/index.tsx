import { TextInput } from "react-native";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type InputProps = {
  icon?: keyof typeof FontAwesome.glyphMap;
};

export function Input({ icon }: InputProps) {
  return (
    <TextInput style={styles.container}>
      <FontAwesome name="address-book-o" />
    </TextInput>
  );
}
