import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../component/Home";
import { Login } from "../component/Login";
import { DarkTheme } from "../constant/Colors";
import { RecipePage } from "../component/RecipePage";

const Stack = createNativeStackNavigator();

export function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Recipe"}
          component={RecipePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            // When logging out, a pop animation feels intuitive
            //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
