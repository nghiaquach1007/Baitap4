import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  // Define state for the background color of the parent component
  const [bgColor, setBgColor] = useState('green');

  // Function to change background color based on button click
  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => changeBackgroundColor('blue')}>
        <Text style={styles.text}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'brown' }]}
        onPress={() => changeBackgroundColor('brown')}>
        <Text style={styles.text}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'yellow' }]}
        onPress={() => changeBackgroundColor('yellow')}>
        <Text style={styles.text}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => changeBackgroundColor('red')}>
        <Text style={styles.text}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'black' }]}
        onPress={() => changeBackgroundColor('black')}>
        <Text style={styles.text}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define styles for the container and buttons
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green', // Default background color
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
