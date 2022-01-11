import {Text, View} from '../utils/Theme';
import {Image, Pressable, StyleSheet} from 'react-native';

export function Card({recipe,navigation}) {
  return (
    <View style={[{marginLeft: 24, marginRight: 24}, styles.mbSmall]}>
      <Pressable style={{flexDirection: 'column'}}
                 onPress={() => {
                   navigation.navigate('Recipe',{
                      recipe
                   })
                 }}>
        <View style={styles.mbSmall}>
          <Image style={[styles.mbSmall, {height: 240, resizeMode: 'cover', borderRadius: 8}]}
                 source={{
                   uri: recipe.imgSrc
                 }}/>
        </View>
        <View style={styles.mbSmall}>
          <Text style={[styles.mbSmall, styles.header]}>{recipe.name}</Text>
          <Text style={styles.body}>{recipe.smallDescription}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24
  },
  body: {
    fontSize: 18,
    textAlign: 'justify'
  },
  mbSmall: {
    marginBottom: 8
  }
});
