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

export const TakePhotoScreen = ({ navigation }) => {
  return (
    <>
      <Text>Take photo Screen</Text>
      <Button
        title="Take photo"
        onPress={() => navigation.navigate("Camera")}
      />
    </>
  );
}