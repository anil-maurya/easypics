import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {container} from '../styles';
import Button from 'react-native-paper/src/components/Button';

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed..')}>
        Press Me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: container,
});

export default Home;
