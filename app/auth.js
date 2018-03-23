import { AsyncStorage } from 'react-native';

export const LOGIN_KEY = 'alleycat-logged-in';

export const onLogIn = () => {
  return AsyncStorage.setItem(LOGIN_KEY, 'true');
};

export const onLogOut = () => {
  return AsyncStorage.removeItem(LOGIN_KEY);
};

export const isLoggedIn = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(LOGIN_KEY)
      .then((res) => {
        resolve(res !== null);
      })
      .catch(err => reject(err));
  });
