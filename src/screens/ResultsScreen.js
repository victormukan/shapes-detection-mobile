import React, { useState } from 'react';
import {
  ScrollView,
  View, 
  Text
} from 'react-native';
import axios from 'axios';
import { Button, CheckBox } from 'react-native-elements';
import { ResultImage } from '../components/ResultImage';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const ResultsScreen = ({ navigation, route: { params: { uri }}}) => {
  const [results, setResults] = useState(null);
  const [showIntermediateChecked, setShowIntermediateChecked] = useState(null);

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

      const res = await axios.post(`http://34.245.7.196:4000/upload${showIntermediateChecked ? '?show_intermediate=true' : ''}`, form_data, request_config);
      console.log(res.data)
      
      let history = await AsyncStorage.getItem('history');
      history = history ? JSON.parse(history) : [];

      history.push({ ...res.data.body, time: Date.now() });

      await AsyncStorage.setItem('history', JSON.stringify(history));

      setResults(res.data.body)
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
        <View style={{ width: '70%', marginHorizontal: '15%', marginTop: 20}}>
          <Button
            title="Проаналізувати результати"
            onPress={loadImage}
          />
        </View>
        <CheckBox
          title='Показати етап аналізу зображення'
          checked={showIntermediateChecked}
          onPress={() => setShowIntermediateChecked(!showIntermediateChecked)}
        />
        { results && 
        <>
          <Text>Брак під час друку {results.isIncorrect === 'True' ? 'Так' : 'Ні'}</Text>
          <Text>Допустиме відхиленя: {results.acceptableDistance}мм</Text>
          <Text>Знайдене відхиленя: {parseFloat(results.maxCenterDistance).toFixed(2)}мм</Text>
          <ResultImage
            uri={results.circles}
            navigation={navigation}
          />
          { showIntermediateChecked && 
            <>
            <Text>Етапи аналізу зображення</Text>
            {results.intermediate.map(i => (<ResultImage
              uri={i}
              key={i}
              navigation={navigation}
            />))}
          </>
          }
        </>
        }
      </View>
    </ScrollView>
  );
}