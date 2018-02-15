import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const TextInputWithLabel = ({ labelText }) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
    <View style={styles.border} />
    <TextInput style={styles.input} />
  </View>
);

TextInputWithLabel.propTypes = {
  labelText: PropTypes.string,
};

export default TextInputWithLabel;
