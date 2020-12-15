import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TakePhotoScreen } from './screens/TakePhotoScreen';
import { CameraScreen } from './screens/CameraScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { ImageFullScreen } from './screens/ImageFullScreen';
import { History } from './screens/History';
import { HistoryItem } from './screens/HistoryItem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="How to make photo">
        <Stack.Screen
          name="How to make photo"
          component={TakePhotoScreen} 
          options={{ title: 'Інструкція' }}
        />
        <Stack.Screen
          name="Camera" 
          component={CameraScreen}
          options={{ title: 'Фото' }}
        />
        <Stack.Screen 
          name="Results" 
          component={ResultsScreen}
          options={{ title: 'Фото' }}
        />
        <Stack.Screen 
          name="Image FullScreen"
          component={ImageFullScreen}
          options={{ title: 'Фото' }}
        />
        <Stack.Screen 
          name="History"
          component={History}
          options={{ title: 'Історія' }}
        />
        <Stack.Screen 
          name="HistoryItem"
          component={HistoryItem}
          options={{ title: 'Історія' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}