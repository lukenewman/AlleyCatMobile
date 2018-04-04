import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, StatusBar, Alert, AsyncStorage } from 'react-native';

import { Container } from '../components/Container';
import { Pass } from '../components/Pass';
import { Header } from '../components/Header';

class QRPage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleLogoutPress = async () => {
    await AsyncStorage.removeItem('alleycat-user-code');
    this.props.navigation.navigate('Login');
  };

  handleSettingsPress = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Yes', onPress: () => this.handleLogoutPress() },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
      { cancelable: false }
    )
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="purple" barStyle="light-content" />
        <Header onPress={this.handleSettingsPress} />
        <Pass />
      </Container>
    );
  }
}

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QRPage;
