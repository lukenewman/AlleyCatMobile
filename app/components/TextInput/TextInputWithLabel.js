import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const TextInputWithLabel = props => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{props.labelText}</Text>
    </View>
    <View style={styles.border} />
    <TextInput style={styles.input} {...props} />
  </View>
);

TextInputWithLabel.propTypes = {
  labelText: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default TextInputWithLabel;
