import { useColorScheme } from "react-native";
import { Navigation } from "./navigation/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";


export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}
