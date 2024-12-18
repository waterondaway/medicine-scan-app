import React from "react";
import { Button, View, Text, StyleSheet, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
export default function HomeScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission to access grallery is required!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (result.status !== "cancel") {
      setImage(result.uri);
    } else {
      console.log("Image selection was canceled");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Second Screen!</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Pick an image from gallery" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 10,
    height: 10,
  },
});
