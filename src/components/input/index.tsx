import { TextInput, View, Text, TouchableOpacity, TextInputProps } from "react-native";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "../../theme";

type InputProps = TextInputProps & {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
  eye?: keyof typeof FontAwesome.glyphMap;
  error?: boolean;
  onPrees?: () => void;
};

export function Input({ title, icon, eye, error, onPrees, ...props }: InputProps) {
  const borderColor = error ? theme.colors.danger : theme.colors.primary;
  return (
    <View style={{ marginTop: 12 }}>
      <View style={styles.viewTitle}>
        <Text style={[styles.title, { color: borderColor }]}>{title}</Text>
      </View>
      <View style={[styles.container, { borderColor }]}>
        <View style={styles.icon}>
          <FontAwesome name={icon} size={21} color={borderColor} />
        </View>
        <TextInput style={styles.content} {...props}/>
        <View style={styles.eye}>
          <TouchableOpacity onPress={onPrees}>
            <FontAwesome name={eye} size={21} color={borderColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
