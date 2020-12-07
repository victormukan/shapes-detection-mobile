import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TakePhotoScreen } from './screens/TakePhotoScreen';
import { CameraScreen } from './screens/CameraScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { ImageFullScreen } from './screens/ImageFullScreen';

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
        <Stack.Screen name="Image FullScreen" component={ImageFullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}