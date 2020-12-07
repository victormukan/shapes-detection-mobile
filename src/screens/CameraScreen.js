import React, { useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export const CameraScreen = ({ navigation }) => {

  const camera = useRef(null);

  const takePicture = async () => {
    if (camera) {
      try {
        const data = await camera.current.takePictureAsync({ quality: 0.5, base64: true });
        console.log(data.uri);
        navigation.navigate("Results", {
          uri: data.uri
        })

      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera 
        ref={camera}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }} />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{ fontSize: 14 }}>Зробити фото</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}