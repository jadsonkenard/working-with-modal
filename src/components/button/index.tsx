import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  Text,
} from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  secondary?: boolean;
};

export function Button({
  title,
  isLoading = false,
  secondary,
  ...props
}: ButtonProps) {
  const backgroundColor = secondary ? theme.colors.light : theme.colors.primary;
  const color = secondary ? theme.colors.black : theme.colors.white;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={color} size={24} />
      ) : (
        <Text style={[styles.title, { color }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
