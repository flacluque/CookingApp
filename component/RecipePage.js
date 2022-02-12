import { Text, View } from "../utils/Theme";
import { Image, ScrollView, TouchableOpacity } from "react-native";

function TitleAndDescription({ title, description }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 36, marginBottom: 8, fontWeight: "bold" }}>
        {title}
      </Text>
      <Text style={{ fontSize: 18, marginTop: 8 }}>{description}</Text>
    </View>
  );
}

function Ingredient({ ingredients }) {
  return (
    <ListRender
      title={"Ingredient"}
      data={ingredients}
      component={IngredientListRender}
    />
  );
}

function Preparation({ steps }) {
  return (
    <ListRender
      title={"Preparation"}
      data={steps}
      component={PreparationListRender}
    />
  );
}

function ListRender({ title, data, component }) {
  const Component_ = component;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>{title}</Text>
      <View>
        {data.map((element) => (
          <Component_ key={element.key} item={element} />
        ))}
      </View>
    </View>
  );
}

function IngredientListRender({ item }) {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ borderRadius: 50, width: 32, height: 32 }}
        source={{ uri: item.imgSrc }}
      />
      <Text>{item.ingredient}</Text>
    </View>
  );
}

function PreparationListRender({ item }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text
        style={{ fontSize: 18, fontWeight: "600", textTransform: "uppercase" }}
      >
        Étape {item.step}
      </Text>
      <Text>{item.detail}</Text>
    </View>
  );
}

function HorizontalLine() {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 37,
        borderBottomWidth: 1,
        borderBottomColor: "#AAA",
      }}
    />
  );
}

function AddCommentButton({ navigation, recipeId }) {
  return (
    <TouchableOpacity
      style={{ marginTop: 30 }}
      onPress={() =>
        navigation.navigate({ name: "Comment", params: { recipeId: 0 } })
      }
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#5DB075",
            paddingHorizontal: 32,
            paddingVertical: 16,
          }}
        >
          <Text style={{ fontSize: 18 }}>Ajouter une photo</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function RecipePage({ navigation, route }) {
  const { recipe } = route.params;
  return (
    <ScrollView>
      <View style={{ paddingBottom: 40 }}>
        <Image
          style={[{ height: 300, resizeMode: "cover" }]}
          source={{
            uri: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8.jpg",
          }}
        />
        <TitleAndDescription
          title={recipe.name}
          description={recipe.largeDescription}
        />
        <HorizontalLine />
        <Ingredient ingredients={recipe.ingredients} />
        <HorizontalLine />
        <Preparation steps={recipe.steps} />
        <AddCommentButton navigation={navigation} recipeId={recipe.id} />
      </View>
    </ScrollView>
  );
}
