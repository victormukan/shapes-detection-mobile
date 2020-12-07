import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export const TakePhotoScreen = ({ navigation }) => {
  const choosePhoto = () => {
    ImagePicker.launchImageLibrary({ noData: true }, response => {
      navigation.navigate("Results", {
        uri: response.uri
      });
    });
  }

  useEffect(() => {
    const fetch = async() => {
      console.log('in fetch')
      try {
        const res = await axios.get('http://10.0.2.2:4000/hc');
        console.log(res);
      } catch(err) {
        console.log(err);
      }
    }

    fetch();
  }, [])
  return (
    <View style={{ display: 'flex' }}>
      <Card>
        <Card.Title>Інструкція як зробити фото</Card.Title>
        <Card.Divider/>
        <Card.Image 
          source={{ uri: 'https://shapes-detection-opencv.s3.eu-west-2.amazonaws.com/sample.jpg'}} 
          style={{
            width: '100%',
            resizeMode: 'contain'
          }}
        />
        <Text style={{ marginVertical: 10, textAlign: 'justify' }}>
          Зробіть фото схожого до даного з шириною зображення 2-3 сантиметр,
          розташуйте друкарську мітку в центрі зображення
        </Text>
      </Card>
      <View style={{ width: '70%', marginHorizontal: '15%', marginTop: 20}}>
        <Button
          title="Зробити фото"
          onPress={() => navigation.navigate("Camera")}
        />
      </View>
      
      <View style={{ width: '70%', marginHorizontal: '15%', marginTop: 20}}>
        <Button
          title="Вибрати існуюче"
          onPress={choosePhoto}
        />
      </View>
    </View>
  );
}