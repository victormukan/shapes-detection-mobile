import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

export const TakePhotoScreen = ({ navigation }) => {
  const choosePhoto = () => {
    ImagePicker.launchImageLibrary({ noData: true }, response => {
      navigation.navigate("Results", {
        uri: response.uri
      });
    });
  }
  return (
    <>
      <Text>Take photo Screen</Text>
      <Button
        title="Take photo"
        onPress={() => navigation.navigate("Camera")}
      />
      <Button
        title="Choose existing photo"
        onPress={choosePhoto}
      />
    </>
  );
}