import React from 'react';
import { Image, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width; 


export const ImageFullScreen = ({ route: { params: { uri }}}) => {
  return (
    <TouchableOpacity>
      <Image
        style={{
          width,
          aspectRatio: 1,
          resizeMode: 'contain'
        }}        
        source={{ uri }}
      />
    </TouchableOpacity>

  );
}