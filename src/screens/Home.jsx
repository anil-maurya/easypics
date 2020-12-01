import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {container} from '../styles';
import Button from 'react-native-paper/src/components/Button';

import ImagePicker from 'react-native-image-picker';

function Home() {
  const handleCamera = () => {
    const config = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 300,
      maxWidth: 300,
    };
    ImagePicker.launchCamera(config, (response) => {
      console.log(response);
    });
  };

  const handleGallery = () => {
    const config = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };
    ImagePicker.launchImageLibrary(config, (response) => {
      console.log(response);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button icon="camera" mode="contained" onPress={handleCamera}>
        Take Picture
      </Button>
      <Button icon="image" mode="outlined" onPress={handleGallery}>
        Gallery
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: container,
});

export default Home;
