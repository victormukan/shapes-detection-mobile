import React, { useState } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-elements';
import { ResultImage } from '../components/ResultImage';


export const ResultsScreen = ({ navigation, route: { params: { uri }}}) => {
  const [resultImages, setResultImages] = useState(null);

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

      const res = await axios.post('http://34.245.7.196:4000/upload', form_data, request_config);
      console.log(res.data)
      setResultImages(res.data.body)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <ScrollView>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <ResultImage
        uri={uri}
        navigation={navigation}
      />

      <Button
        title="Analyze print"
        onPress={loadImage}
      />
      { resultImages && 
      <>
        <ResultImage
          uri={resultImages.circles}
          navigation={navigation}
        />
       
        <ResultImage
          uri={resultImages.lines}
          navigation={navigation}
        />
      </>
      }
      </View>
    </ScrollView>
  );
}