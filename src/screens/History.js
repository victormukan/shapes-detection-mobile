import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

export const History = ({ navigation }) => {
  [history, setHistory] = useState(null);

  useEffect(() => {
    const loadHistory = async () => {
      const loadedHistory = await AsyncStorage.getItem('history');
      console.log(loadedHistory);
      setHistory(JSON.parse(loadedHistory));
    }

    loadHistory();
  }, []);

  return (
    <ScrollView>
    {
      history && history.filter(i => i.time).reverse().map((i, index) => (
        <ListItem 
          key={index}
          bottomDivider 
          onPress={() => navigation.navigate("HistoryItem", { item : i })}
        >
          <Icon name={i.isIncorrect !== 'True' ? 'check' : 'clear'} size={30}/>
          <ListItem.Content>
            <ListItem.Title>{i.isIncorrect !== 'True' ? 'Вірно' : 'Похибка'}</ListItem.Title>
            <ListItem.Subtitle>{moment(i.time).format('LLLL')}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
    }
    </ScrollView>

  );
}