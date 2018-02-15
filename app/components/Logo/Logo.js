import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
    {/* <Text style={styles.text}>Alley Cat{'\n'}Music Membership</Text> */}
  </View>
);

export default Logo;
