import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputWithLabel } from '../components/TextInput';
import { BorderedButton } from '../components/Button';
import { onLogIn } from '../auth';

import firebase from 'react-native-firebase';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    onLoginPress: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      code: '',
    };
  }

  handleNameChangeText = text => {
    this.setState({ name: text });
  };

  handleCodeChangeText = text => {
    this.setState({ code: text });
  };

  isValid() {
    const { name, code } = this.state;

    if (name.length > 0 && code.length > 0) {
      return true;
    }

    if (name.length === 0) {
      this.setState({ error: 'You must enter a first name.' });
    } else if (code.length === 0) {
      this.setState({ error: 'You must enter an ACM code.' });
    }

    return false;
  }

  navigatePastLogin = () => {
    onLogIn().then(this.props.onLoginPress);
  };

  handlePressLogIn = () => {
    var { name, code } = this.state;

    if (this.isValid()) {
      var ref = firebase.database().ref('users');
      var query = ref.orderByChild('code').equalTo(this.state.code);
      query.once('value', snapshot => {
        snapshot.forEach(child => {
          const firebaseName = child
            .val()
            .name.split(' ')[0]
            .toLowerCase();
          const firebaseCode = child.val().code.toLowerCase();
          name = name.toLowerCase();
          code = code.toLowerCase();
          if (name === firebaseName && code === firebaseCode) {
            this.navigatePastLogin();
          }
        });
      });
    }
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <TextInputWithLabel
            autoCorrect={false}
            labelText="first_name"
            onChangeText={this.handleNameChangeText}
          />
          <TextInputWithLabel
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType={'go'}
            labelText="acm_code"
            onChangeText={this.handleCodeChangeText}
          />
        </KeyboardAvoidingView>
        <BorderedButton text="log_in" onPress={this.handlePressLogIn} />
      </Container>
    );
  }
}

export default Login;
