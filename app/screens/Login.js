import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, View, Alert, AsyncStorage } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputWithLabel } from '../components/TextInput';
import { BorderedButton } from '../components/Button';
import { Loader } from '../components/Loader';

import firebase from 'react-native-firebase';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    onLoginPress: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
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
      Alert.alert('Missing Name', 'You must enter a first name.');
    } else if (code.length === 0) {
      Alert.alert('Missing Code', 'You must enter an ACM code.');
    }

    return false;
  };

  handlePressLogIn = () => {
    var { name, code } = this.state;

    if (this.isValid()) {
      this.setState({
        loading: true
      });
      var ref = firebase.database().ref('users');
      var query = ref.orderByChild('code').equalTo(this.state.code);
      query.once('value', snapshot => {
        snapshot.forEach(async (child) => {
          const firebaseName = child
            .val()
            .name.split(' ')[0]
            .toLowerCase();
          const firebaseCode = child.val().code.toLowerCase();
          name = name.toLowerCase();
          code = code.toLowerCase();
          if (name === firebaseName && code === firebaseCode) {
            this.setState({
              loading: false
            });
            try {
              await AsyncStorage.setItem('alleycat-user-code', code);
            } catch (error) {
              alert(error);
            }
            this.props.navigation.navigate('Main');
          } else {
            Alert.alert('Login Error', 'There was a probblem with your information. Please double-check your credentials and try again.');
          }
        });
      });
    }
  };

  render() {
    return (
      <Container>
        <Loader loading={this.state.loading} />
        <StatusBar translucent={false} barStyle="light-content" />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
        </TouchableWithoutFeedback>
        <BorderedButton text="log_in" onPress={this.handlePressLogIn} />
      </Container >
    );
  }
}

export default Login;
