import React from "react";  
import { Button, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handlePress = async() => {
    try {
      const response = await fetch('http://192.168.10.159:3000/');
      const data = await response.json();
      Alert.alert('Data from Backend', data.name);
    } catch(error) {
      Alert.alert('API Unsuccessfully!');
    }
  };
    return (
      <View style={styles.container}>
        <Text>Welcome to the Home Screen!</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => navigation.navigate('Second')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });