import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "../../theme";

type InputProps = {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
  eye?: keyof typeof FontAwesome.glyphMap;
  error?: boolean;
};

export function Input({ title, icon, eye, error }: InputProps) {
    const borderColor = error ? theme.colors.danger : theme.colors.primary;
  return (
    <View style={{ marginTop: 12 }}>
      <View style={styles.viewTitle}>
        <Text style={[styles.title, {color: borderColor}]}>{title}</Text>
      </View>
      <View style={[styles.container, {borderColor}]}>
        <View style={styles.icon}>
          <FontAwesome name={icon} size={21} color={borderColor} />
        </View>
        <TextInput style={styles.content} />
        <View style={styles.eye}>
          <FontAwesome name={eye} size={21} color={borderColor} />
        </View>
      </View>
    </View>
  );
}
