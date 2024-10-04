import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Home, Login, Register } from "../pages";

type StackNavigationProp = {
    home: undefined;
    login: undefined;
    register: undefined;
}

export type StackType = NativeStackNavigationProp<StackNavigationProp>;

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
