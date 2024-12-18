import React from "react";  
import { Button, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
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