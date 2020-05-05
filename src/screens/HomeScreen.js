import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import { Assets } from "react-navigation-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>React Native Functionality</Text>

      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo!" />

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />

      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Screen Demo"
      />

      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Screen Demo"
      />

      <Button
        onPress={() => navigation.navigate('Input')}
        title="Go to Input Screen Demo"
      />

      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Screen Demo"
      />

    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  // viewStyle: {
  //   justifyContent: 'space-around'
  // }
});

export default HomeScreen;

// Navigating to List Demo using TouchableOpacity 
{/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}