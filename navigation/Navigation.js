import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DetailScreen, Home} from "../component/Home";

const Stack = createNativeStackNavigator();

export function Navigation({colorScheme}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme: DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home}/>
        <Stack.Screen name={"Details"} component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

