import { Text, View } from "../utils/Theme";
import { Image, ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  padMd: {
    padding: 16,
  },
  mtSm: {
    marginTop: 8,
  },
  title: {
    fontSize: 36,
    marginBottom: 8,
    fontWeight: "bold",
  },
  body: {
    fontSize: 18,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  ingredientView: {
    marginTop: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientImage: {
    borderRadius: 50,
    width: 32,
    height: 32,
  },
  ingredientText: {
    marginLeft: 16,
    fontSize: 16,
  },
  preparationView: { flex: 1, flexDirection: "column" },
  preparationStepNumber: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    marginTop: 16,
  },
  preparationStepDetails: { fontSize: 18 },
  hl: {
    flex: 1,
    marginHorizontal: 37,
    borderBottomWidth: 1,
    borderBottomColor: "#AAA",
  },
});

function TitleAndDescription({ title, description }) {
  return (
    <View style={styles.padMd}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{description}</Text>
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
    <View style={styles.padMd}>
      <Text style={styles.subtitle}>{title}</Text>
      <View style={styles.mtSm}>
        {data.map((element) => (
          <Component_ key={element.key} item={element} />
        ))}
      </View>
    </View>
  );
}

function IngredientListRender({ item }) {
  return (
    <View style={styles.ingredientView}>
      <Image style={styles.ingredientImage} source={{ uri: item.imgSrc }} />
      <Text style={styles.ingredientText}>{item.ingredient}</Text>
    </View>
  );
}

function PreparationListRender({ item }) {
  return (
    <View style={styles.preparationView}>
      <Text style={styles.preparationStepNumber}>Étape {item.step}</Text>
      <Text style={styles.preparationStepDetails}>{item.detail}</Text>
    </View>
  );
}

function HorizontalLine() {
  return <View style={styles.hl} />;
}

export function RecipePage({ route }) {
  const { recipe } = route.params;
  return (
    <ScrollView>
      <Image
        style={[{ height: 344, resizeMode: "cover" }]}
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
    </ScrollView>
  );
}
