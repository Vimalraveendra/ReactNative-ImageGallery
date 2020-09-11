import React from 'react';

import {StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const CardImage = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: item.picture.large}} style={styles.cardImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardImage: {
    width: width / 4,
    height: width / 4,
    resizeMode: 'cover',
  },
});

export default CardImage;
