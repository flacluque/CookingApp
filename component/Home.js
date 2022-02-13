import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Recettes } from "../constant/Recettes";
import { Card } from "./Cards";

export function Home({ navigation }) {
  const cards = Recettes.map((recipe) => (
    <Card key={recipe.id} recipe={recipe} navigation={navigation} />
  ));

  return (
    <SafeAreaView>
      <ScrollView>{cards}</ScrollView>
    </SafeAreaView>
  );
}
