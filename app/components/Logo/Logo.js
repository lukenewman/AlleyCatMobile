import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
  </View>
);

export default Logo;
