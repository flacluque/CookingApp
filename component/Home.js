import {Button} from "react-native";
import {View, Text} from '../utils/Theme'
export function Home({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go Details"
        onPress={() => navigation.navigate('Details',{itemId: 8829, name: 'Recette de pomme de terre cuite au four'})}/>
    </View>
  )
}

export function DetailScreen({route, navigation}){
  const {itemId, name} = route.params;
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>name: {JSON.stringify(name)}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}/>
    </View>
  )
}