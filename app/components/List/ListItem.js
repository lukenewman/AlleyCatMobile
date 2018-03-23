import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({ notification, onPress }) => (
  // <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
  <View style={styles.row}>
    <View style={styles.logoTitleContainer}>
      <Image resizeMode="contain" style={styles.image} source={require('../Logo/images/logo.png')} />
      <Text style={styles.title}>{notification.title}</Text>
    </View>
    <Text style={styles.message}>{notification.message}</Text>
  </View >
  // </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ListItem;
