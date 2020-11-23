import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-elements';


export const ResultsScreen = ({ route: { params: { uri }}}) => {

  const loadImage = async () => {
    try {
      const form_data = new FormData();
      form_data.append("file", { uri, name: 'image.jpg', type: 'image/jpeg' });
    
      const request_config = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: form_data
      };

      console.log('into load')
      // const res = await axios.get('http://34.245.7.196:4000/hc');
      // const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      const res = await axios.post('http://34.245.7.196:4000/upload', form_data, request_config);
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Image
        style={{ width: '50%', height:'50%', margin:'5%'}}
        source={{ uri }}
      />

      <Button
        title="Take photo"
        onPress={loadImage}
      />
    </>
  );
}