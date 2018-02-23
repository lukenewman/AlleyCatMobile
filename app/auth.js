import { AsyncStorage } from 'react-native';

export const USER_KEY = 'alleycat-logged-in';

export const onLogIn = () => {
  console.log('onLogIn');
  return AsyncStorage.setItem(USER_KEY, 'true');
};

export const onLogOut = () => {
  console.log('onLogOut');
  return AsyncStorage.removeItem(USER_KEY);
};

export const isLoggedIn = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then((res) => {
        console.log('res', res);
        resolve(res !== null);
      })
      .catch(err => reject(err));
  });
