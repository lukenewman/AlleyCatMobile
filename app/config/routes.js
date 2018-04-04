import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator, SwitchNavigator } from 'react-navigation';

import QRPage from '../screens/QR';
import NotificationList from '../screens/NotificationList';
import Login from '../screens/Login';
import AuthLoadingScreen from '../screens/AuthLoading';

const MainTab = TabNavigator(
  {
    QR: {
      screen: QRPage,
      navigationOptions: {
        tabBarLabel: 'Pass',
      },
    },
    NotificationList: {
      screen: NotificationList,
      navigationOptions: {
        tabBarLabel: 'Notifications',
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'QR') {
          iconName = focused ? 'md-qr-scanner' : 'ios-qr-scanner';
        } else if (routeName === 'NotificationList') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#90FA4D',
      inactiveTintColor: '#90FA4D',
      inactiveBackgroundColor: '#000',
      activeBackgroundColor: '#000',
      labelStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const NavigationContainer = SwitchNavigator(
  {
    Main: MainTab,
    Login: Login,
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default NavigationContainer;
