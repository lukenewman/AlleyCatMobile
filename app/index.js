import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AppRegistry } from 'react-native';

import Main from './config/routes';
import Login from './screens/Login';
// import { LoginModal, Main, createRootNavigator } from './config/routes';
// import { createRootNavigator } from './config/routes';
import { isLoggedIn } from './auth';
import OneSignal from 'react-native-onesignal';

EStyleSheet.build({
  // $outline: 1, // Uncomment this line to outline all components in-app.
  $primaryBlack: '#000',
  $primaryGreen: '#90FA4D',
  $grey: '#333',
  $white: '#fff',
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      checkedLogIn: false,
    };
  }

  componentWillMount() {
    isLoggedIn()
      .then(res => this.setState({ loggedIn: res, checkedLogIn: true }))
      .catch(err => alert(err));

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    OneSignal.configure({});
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
    console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  handleLoginPress() {
    this.setState({ loggedIn: true });
  }

  handleLogoutPress() {
    this.setState({ loggedIn: false });
  }

  render() {
    const { checkedLogIn, loggedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedLogIn) {
      return null;
    }

    console.log('presenting root navigator for loggedIn state', loggedIn);

    if (loggedIn) {
      return <Main />;
    }

    return <Login onLoginPress={() => this.handleLoginPress()} />;
  }
}

AppRegistry.registerComponent('AlleyCat', () => App);
