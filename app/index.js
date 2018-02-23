import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AppRegistry } from 'react-native';

import { Main } from './config/routes';
import Login from './screens/Login';
// import { LoginModal, Main, createRootNavigator } from './config/routes';
// import { createRootNavigator } from './config/routes';
import { isLoggedIn } from './auth';

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
      // const screenProps = {
      //   onLogoutPress: this.handleLogoutPress(),
      // };

      // return <Main screenProps={screenProps} />;
      console.log(JSON.stringify(Main));
      return <Main />;
    }

    return <Login onLoginPress={() => this.handleLoginPress()} />;
  }
}

AppRegistry.registerComponent('AlleyCat', () => App);
