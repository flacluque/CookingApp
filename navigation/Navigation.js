import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../component/Home';
import {DarkTheme} from '../constant/Colors';

const Stack = createNativeStackNavigator();

export function Navigation({colorScheme}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme: DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
