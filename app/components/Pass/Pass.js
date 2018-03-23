import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import QRCode from 'react-native-qrcode';

import { Logo } from '../Logo';

import USER_CODE_KEY from '../../user';

import styles from './styles';

class Pass extends Component {
  state = {
    code: '',
  };

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem(USER_CODE_KEY);
      if (value !== null) {
        this.setState({
          code: value
        });
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <QRCode value={this.state.code} size={150} bgColor="black" fgColor="DDDDDD" />
        <Text style={styles.text}>{this.state.code}</Text>
      </View>
    );
  }
}

export default Pass;
