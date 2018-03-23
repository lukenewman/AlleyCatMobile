import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, StatusBar, Alert } from 'react-native';

import { Container } from '../components/Container';
import { Pass } from '../components/Pass';
import { Header } from '../components/Header';

import { onLogOut } from '../auth';

class QRPage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  showLogin = () => {
    onLogOut().then(() => this.props.navigation.navigate('Login'));
  };

  handleSettingsPress = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Yes', onPress: () => console.log('yes pressed') },
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
