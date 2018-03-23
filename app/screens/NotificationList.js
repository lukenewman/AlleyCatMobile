import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { Container } from '../components/Container';
import { ListItem, Separator } from '../components/List';

import notifications from '../data/notifications';
import { onLogOut } from '../auth';

class NotificationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
      refreshing: false,
    };
  };

  componentDidMount() {
    this.getNotifications()
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.notifications}
            renderItem={({ item }) => <ListItem notification={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </View>
      </Container>
    );
  };

  handleRefresh = () => {
    this.setState({
      refreshing: true,
    }, () => {
      this.getNotifications();
    });
  }

  getNotifications() {
    var NOTIFS_URL = 'https://onesignal.com/api/v1/notifications?app_id=f8e0e76d-701c-41fb-8b32-710c6ce7c421';

    fetch(NOTIFS_URL, {
      headers: {
        'Authorization': 'Basic NzMxYzlhYTUtMGRlMS00ZTRmLWE5NjUtOGI1YjUzYjljNjNj',
      }
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        // console.log('responseJSON', responseJSON);
        var notifs = responseJSON.notifications;
        var notifications = [];
        for (var i = 0; i < notifs.length; i++) {
          var notif = notifs[i];
          notifications.push({
            id: notif.id,
            title: notif.headings.en,
            message: notif.contents.en
          });
        }

        this.setState({ notifications: notifications, refreshing: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ refreshing: false });
      });
  }
}

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  text: {
    color: '$primaryGreen',
  },
});

export default NotificationList;
