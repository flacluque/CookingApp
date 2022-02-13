import { Text, View } from "../utils/Theme";
import { Camera } from "expo-camera";
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";

export function CameraComponent({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [cameraRef, setCameraRef] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.bgBlack}>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.container}>
          <Camera
            ref={(ref) => {
              setCameraRef(ref);
            }}
            style={styles.camera}
            type={type}
          ></Camera>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <Button cameraRef={cameraRef} navigation={navigation} />
          </View>
          <View style={[styles.centred, styles.flipButton]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Button({ cameraRef, navigation }) {
  return (
    <TouchableOpacity
      style={styles.picButton}
      onPress={async () => {
        if (!cameraRef) return;
        let photo = await cameraRef.takePictureAsync();
        navigation.navigate({
          name: "Comment",
          params: { data: photo },
          merge: true,
        });
      }}
    >
      <View style={styles.btn1}>
        <View style={styles.btn2}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bgBlack: {
    backgroundColor: "#000",
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  camera: {
    flex: 3,
  },
  footer: {
    flexDirection: "row",
    alignItems: "stretch",
    flex: 0.2,
    backgroundColor: "#000",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 50,
  },
  flipButton: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  picButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
  },
  buttonWrapper: {
    borderColor: "#FFF",
    borderWidth: 2,
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  centred: {
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  btn1: {
    backgroundColor: "#000",
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 5,
    marginLeft: 5,
  },
  btn2: {
    backgroundColor: "#FFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 5,
    marginLeft: 5,
  },
});
