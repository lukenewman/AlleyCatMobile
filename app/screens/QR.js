import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Pass } from '../components/Pass';

import { onLogOut } from '../auth';

class QRPage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  componentWillMount() {
    console.log('setting status bar style to light content');
    StatusBar.setBarStyle('light-content');
  }

  showLogin = () => {
    console.log('navigation', this.props.navigation);
    onLogOut().then(() => this.props.navigation.navigate('Login'));
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="purple" barStyle="light-content" />
        <Pass />
        {/* <TouchableWithoutFeedback onPress={this.showLogin}>
          <View style={styles.button}>
            <Text style={styles.text}>{'to log in (dev only)'}</Text>
          </View>
        </TouchableWithoutFeedback> */}
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
