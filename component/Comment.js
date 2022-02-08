import {Text, View} from "../utils/Theme";
import {ScrollView, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 168,
    backgroundColor: '#5DB075'
  },
  commentText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 86,
    paddingLeft: 15
  },
  flexC: {
    flexDirection: "column",
    flex: 1
  },
  flexR: {
    flexDirection: "row",
  },
  picture: {
    height: 40,
    width: 40,
    backgroundColor: 'grey',
    borderRadius: 20
  },
  mt: {
    marginTop: 16
  },
  ml: {
    marginLeft: 16
  },
  mr: {
    marginRight: 16
  },
  defaultText: {
    fontSize: 16,
  },
  stretch: {
    alignItems: "stretch"
  },
  mh: {
    marginTop: 16,
    marginHorizontal: 16
  },
  dividerLine: {
    width: 355,
    height: 1,
    marginTop: 32,
    backgroundColor: '#595959',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export function Comment (){
  return(
   <ScrollView>
     <View style={[styles.flexC, styles.stretch,]}>

       <View style={styles.header}>
         <Text style={styles.commentText}>Commentaires</Text>
       </View>

       {/*Image Comment*/}
       <View style={{marginBottom: 16}}>
         <View style={[styles.flexC, styles.mt, styles.ml, styles.mr, styles.stretch]}>
           <View style={[styles.flexR, {alignItems: 'center'}]}>
             <View style={[styles.picture, styles.mr]}>
             </View>
             <Text style={styles.defaultText}>User1</Text>
             <Text style={[styles.defaultText, {marginLeft: "auto"}]}>8m ago</Text>
           </View>
           <View style={styles.mh}>
             <View style={{
               backgroundColor: 'grey',
               width: '100%',
               height: 200,
               borderRadius: 8
             }}>

             </View>
           </View>
         </View>
         <View style={styles.dividerLine}>
         </View>
       </View>

       {/*Text Comment*/}
       <View>
         <View style={[{marginBottom: 16}]}>
           <View style={[ styles.ml, styles.mr]}>
             <View style={[styles.flexR, {alignItems: 'center', marginBottom: 16}]}>
               <View style={[styles.picture, styles.mr]}>
               </View>
               <Text style={styles.defaultText}>User1</Text>
               <Text style={[styles.defaultText, {marginLeft: "auto"}]}>8m ago</Text>
             </View>
             <View style={{marginLeft: 16, marginRight: 18}}>
               <Text>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur enim itaque nisi tempora! Illo
                 laboriosam, voluptatibus. Doloribus ducimus error expedita laborum mollitia nisi nulla, officiis reiciendis
                 ut voluptas. Provident.
               </Text>
             </View>
           </View>
           <View style={styles.dividerLine}>
           </View>
         </View>
       </View>
     </View>
   </ScrollView>
  )
}
