import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode';

import { Logo } from '../Logo';

import styles from './styles';

class Pass extends Component {
  state = {
    text: 'acm_5jrc8',
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <QRCode value={this.state.text} size={150} bgColor="90FA4D" fgColor="black" />
        {/* <View style={styles.separator} /> */}
        <Text style={styles.text}>{'acm_5jrc8'}</Text>
      </View>
    );
  }
}

export default Pass;
