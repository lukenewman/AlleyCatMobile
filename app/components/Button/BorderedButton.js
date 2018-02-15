import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const BorderedButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

BorderedButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default BorderedButton;
