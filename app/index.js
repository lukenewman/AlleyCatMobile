import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import OneSignal from 'react-native-onesignal';
import { AppRegistry } from 'react-native';

import NavigationContainer from './config/routes';

EStyleSheet.build({
  // $outline: 1, // Uncomment this line to outline all components in-app.
  $primaryBlack: '#000',
  $primaryGreen: '#90FA4D',
  $grey: '#DDD',
  $white: '#fff',
});

export default class App extends React.Component {
  componentWillMount() {
    // OneSignal.addEventListener('received', this.onReceived);
    // OneSignal.addEventListener('opened', this.onOpened);
    // OneSignal.addEventListener('registered', this.onRegistered);
    // OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    OneSignal.configure({});
  }

  componentWillUnmount() {
    // OneSignal.removeEventListener('received', this.onReceived);
    // OneSignal.removeEventListener('opened', this.onOpened);
    // OneSignal.removeEventListener('registered', this.onRegistered);
    // OneSignal.removeEventListener('ids', this.onIds);
  }

  render() {
    return <NavigationContainer />;
  }
}

AppRegistry.registerComponent('AlleyCat', () => App);
