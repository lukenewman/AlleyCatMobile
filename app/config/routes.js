import React from 'react';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from '../screens/Login';
import QRPage from '../screens/QR';
import NotificationList from '../screens/NotificationList';

export const Main = TabNavigator(
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
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#90FA4D',
      inactiveTintColor: '#90FA4D',
      inactiveBackgroundColor: '#000',
      activeBackgroundColor: '#000',
      style: {
        // borderWidth: 1,
        // borderTopWidth: 2,
        // borderColor: '#90FA4D',
      },
      labelStyle: {
        // fontSize: 18,
        fontWeight: 'bold',
        // color: '#90FA4D',
        // position: 'relative',
        // alignSelf: 'center',
      },
      // tabStyle: {
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // },
    },
    // tabBarComponent: TabBarBottom,
    // tabBarPosition: 'bottom',
    // animationEnabled: false,
    // swipeEnabled: false,
  },
);

export const createRootNavigator = (loggedIn = false) =>
  StackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
      Login: {
        screen: Login,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: loggedIn ? 'Main' : 'Login',
    },
  );
