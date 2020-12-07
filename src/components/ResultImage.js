

import React from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width; 

export const ResultImage = ({ uri, navigation }) => {
 
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Image FullScreen", { uri })}>
      <Image
        style={{
          width: width * .6,
          aspectRatio: 1,
          resizeMode: 'contain'
        }}        
        source={{ uri }}
      />
    </TouchableOpacity>
  );
}