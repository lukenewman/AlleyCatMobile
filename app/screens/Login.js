import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputWithLabel } from '../components/TextInput';
import { BorderedButton } from '../components/Button';
import { onLogIn } from '../auth';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressLogIn = () => {
    console.log('LOG IN PRESSED');
    console.log('navigation', this.props.navigation);
    onLogIn().then(() => this.props.navigation.navigate('QR'));
    // onLogIn().then(() => this.props.navigation.goBack());
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <TextInputWithLabel autoCorrect={false} labelText="first_name" />
          <TextInputWithLabel
            autoCorrect={false}
            autoCapitalize={false}
            returnKeyType={'go'}
            labelText="acm_code"
          />
        </KeyboardAvoidingView>
        <BorderedButton text="log_in" onPress={this.handlePressLogIn} />
      </Container>
    );
  }
}

export default Login;
