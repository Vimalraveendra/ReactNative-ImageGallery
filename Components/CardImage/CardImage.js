import React from 'react';

import {StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');

const CardImage = ({item, orientation, index}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Animatable.View
        animation="zoomIn"
        delay={index * 100}
        useNativeDriver={true}>
        <Image
          source={{uri: item.picture.large}}
          style={
            orientation === '' || orientation === 'portrait'
              ? styles.cardImagePortrait
              : styles.cardImageLandscape
          }
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardImagePortrait: {
    width: width / 4,
    height: width / 4,
    resizeMode: 'cover',
  },
  cardImageLandscape: {
    width: height / 4,
    height: height / 4,
    resizeMode: 'cover',
  },
});

export default CardImage;
