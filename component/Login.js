import * as React from "react";
import { Text, TextInput, View } from "../utils/Theme";
import { ScrollView, StyleSheet, TouchableHighlight } from "react-native";
import { LoginData } from "../constant/LoginData";
import { useState } from "react";

export function Login({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  let [displayError, setDisplayError] = useState(false);
  const itsGood = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  const itsNotGood = () => setDisplayError(true);

  return (
    <ScrollView contentContainerStyle={styles.container3}>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          {displayError ? (
            <Text style={{ paddingLeft: 14, color: "red", fontSize: 16 }}>
              Username ou Password incorrect
            </Text>
          ) : (
            <></>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.containerButton}>
            <TouchableHighlight
              onPress={isInData(username, password) ? itsGood : itsNotGood}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.textButton}>Sign In</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function isInData(login, password) {
  return !!LoginData.filter(
    (el) => el.username === login.toLowerCase() && el.password === password
  ).length;
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: "center",
    height: 50,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    flexDirection: "column",
    flex: 1,
    alignItems: "stretch",
  },
  buttonContainer: {
    backgroundColor: "#5DB075",
    borderRadius: 10,
    padding: 10,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  textButton: {
    fontSize: 25,
    color: "white",
  },
  textInput: {
    borderStyle: "solid",
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    margin: 12,
    fontSize: 16,
    paddingLeft: 14,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
});
