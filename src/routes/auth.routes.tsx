import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";

export type AuthenticationParamList = {
  Login: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthenticationParamList>();

const AuthenticationStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export { AuthenticationStack };
