import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the userCode from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userCode = await AsyncStorage.getItem('alleycat-user-code');

    // This will switch to the Main screen or Login screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userCode ? 'Main' : 'Login');
  };

  // Render any loading content that you like here
  render() {
    return (
      // <View style={styles.container}>
      //   <ActivityIndicator />
      //   <StatusBar barStyle="default" />
      // </View>
      <View />
    );
  }
}

export default AuthLoadingScreen;
