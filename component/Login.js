import * as React from 'react';
import { View} from '../utils/Theme';
import { Button, TextInput, StyleSheet, TouchableHighlight, Text} from 'react-native';
import { LoginData } from '../constant/LoginData';

export function Login({navigation}) {
  
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const itsGood = () => navigation.navigate("Home");
    const itsNotGood = () => console.log('Données incorrectes');
    

    return (
        
        <View style = {styles.container3}>
            <View style = {styles.container2}>
                <TextInput style = {{fontSize: 20}}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                />
                <TextInput style = {{fontSize: 20}}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />
            </View>
            <View style = {styles.containerButton}>     
                <TouchableHighlight onPress={isInData(username, password) ? itsGood : itsNotGood}>
                    <View style={styles.buttonContainer}>
                        <Text style= {styles.textButton}>Sign In</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    
    );
  }

  

  function isInData(login, password){
    const mapOfData = new Map(LoginData);
    if(mapOfData.has(login) && mapOfData.get(login) == password){
        return true;
    }
    return false;
  }

  const styles = StyleSheet.create({
    container1: {
      justifyContent: "center",
      height: 50,
    
    },    
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
    },
    container3: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 250,
    },
    buttonContainer: {
        backgroundColor: '#5DB075',
        borderRadius: 10,
        padding: 10,
        
      },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        
    },
    textButton:{
        fontSize: 25,
        color: 'white'
    }
      
  });