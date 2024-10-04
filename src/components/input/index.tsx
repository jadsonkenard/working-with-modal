import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "../../theme";

type InputProps = {
  icon: keyof typeof FontAwesome.glyphMap;
  eye?: keyof typeof FontAwesome.glyphMap;
};

export function Input({ icon, eye }: InputProps) {
  return (
    <View style={{marginTop: 12}}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Email</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.icon}>
          <FontAwesome name={icon} size={21} color={theme.colors.primary} />
        </View>
        <TextInput style={styles.content} />
        <View style={styles.eye}>
          <FontAwesome name={eye} size={21} color={theme.colors.primary} />
        </View>
      </View>
    </View>
  );
}
