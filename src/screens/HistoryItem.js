import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ResultImage } from '../components/ResultImage';

export const HistoryItem = ({ navigation, route: { params: { item }}}) => {
  return (
    <ScrollView>
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Text>Брак під час друку {item.isIncorrect === 'True' ? 'Так' : 'Ні'}</Text>
        <Text>Допустиме відхиленя: {item.acceptableDistance}мм</Text>
        <Text>Знайдене відхиленя: {parseFloat(item.maxCenterDistance).toFixed(3)}мм</Text>
        <ResultImage
          uri={item.circles}
          navigation={navigation}
        />
        { item.intermediate.length > 0 && 
          <>
          <Text>Етапи аналізу зображення</Text>
          {item.intermediate.map(i => (<ResultImage
            uri={i}
            key={i}
            navigation={navigation}
          />))}
        </>
        }
      </View>
    </ScrollView>
  );
}