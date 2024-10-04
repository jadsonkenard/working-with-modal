import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { Loading } from "./src/components";
import { Routes } from "./src/routes/routes";

export default function App() {
  const [fontsLoad] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light,
  });

  if (!fontsLoad) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


