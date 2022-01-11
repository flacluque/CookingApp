import {Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../utils/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Recettes} from '../constant/Recettes';

export function Home({navigation}) {
  const cards = Recettes.map((el) =>
    <Card
      key={el.id}
      headerName={el.name}
      description={el.smallDescription}
      imgSrc={el.imgSrc}/>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        {cards}
      </ScrollView>
    </SafeAreaView>
  );
}

function Card({headerName, description, imgSrc}) {
  return ( 
    <View style={[{width: '86%', marginLeft: 'auto', marginRight: 'auto'}, styles.mbSmall]}>
      <Pressable style={{flexDirection: 'column'}}
                 onPress={() => {
                   console.log('You should be moved to the next page');
                 }}>
        <View style={styles.mbSmall}>
          <Image style={[styles.mbSmall, {height: 240, resizeMode: 'cover', borderRadius: 8}]}
                 source={{
                   uri: imgSrc
                 }}/>
        </View>
        <View style={styles.mbSmall}>
          <Text style={[styles.mbSmall, styles.header]}>{headerName}</Text>
          <Text style={styles.body}>{description}</Text>
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
