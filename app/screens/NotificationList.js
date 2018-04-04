import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

import { Container } from '../components/Container';
import { ListItem, Separator } from '../components/List';

import notifications from '../data/notifications';

const omittedNotificationIDs = [
  '4b2d3bc2-86ec-413b-ba8a-e2d86a515b7e',
  '2a6e8c22-4f79-4965-ae25-7ae1ba8d6e98',
  '33ca9cf1-a425-4fbf-961e-7a33a958a4fd',
  '65bb3721-d55f-4d66-bc81-79e09fa8557a',
  '51ec82e6-d38c-4ffa-9c3f-136f8ee37e7a',
  'a220850a-2ddc-48a4-b7c4-b06b7eabec4c',
  '779490aa-2a15-4b70-b450-da863f5416cb',
  'fd980556-2a9d-4385-84d5-c44c5be55524',
  'a7616f30-5d9e-4717-bcf7-5f883dc6cb0e'
]

const hasSeenIntroNotificationsKey = "alleycat-has-seen-intro-notifs";
const anchorNotificationIDKey = "alleycat-anchor-notif-id";

const introNotificationsArray = [
  {
    id: "1",
    title: "WELCOME",
    message: "Welcome to the official Alley Cat Music Membership mobile app!"
  },
  {
    id: "2",
    title: "WELCOME",
    message: "You're looking at the notifications list. We'll send you messages about events, updates, and member-exclusive parties."
  },
  {
    id: "3",
    title: "WELCOME",
    message: "On the other tab, you'll find your new digital Alley Cat Pass that will prove your membership at the door."
  },
  {
    id: "4",
    title: "WELCOME",
    message: "We're just getting started with Alley Cat Mobile. We have many features in the works that we're excited to get out to you."
  }
];

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
    const NOTIFS_URL = 'https://onesignal.com/api/v1/notifications?app_id=f8e0e76d-701c-41fb-8b32-710c6ce7c421';

    fetch(NOTIFS_URL, {
      headers: {
        'Authorization': 'Basic NzMxYzlhYTUtMGRlMS00ZTRmLWE5NjUtOGI1YjUzYjljNjNj',
        'Cache-Control': 'no-cache'
      }
    })
      .then((response) => response.json())
      .then(async (responseJSON) => {
        var notifs = responseJSON.notifications;
        var notifications = [];

        // If this is the user's first time seeing the notifications list, show them the intro messages.
        // Also, note the most recent notification so the intros can follow it down the list.
        const hasSeenIntroNotifs = await AsyncStorage.getItem(hasSeenIntroNotificationsKey) === 'YES';
        if (!hasSeenIntroNotifs) {
          AsyncStorage.setItem(anchorNotificationIDKey, notifs[0].id);
          AsyncStorage.setItem(hasSeenIntroNotificationsKey, 'YES');
        }
        const anchorNotificationIDForIntros = await AsyncStorage.getItem(anchorNotificationIDKey);

        for (var i = 0; i < notifs.length; i++) {
          var notif = notifs[i];

          // Inject intro notifs if we have the anchor notif
          if (notif.id === anchorNotificationIDForIntros) {
            for (var x = 0; x < introNotificationsArray.length; x++) {
              var introNotif = introNotificationsArray[x];
              notifications.push(introNotif);
            }
          }

          if (!omittedNotificationIDs.includes(notif.id)) {
            notifications.push({
              id: notif.id,
              title: notif.headings.en,
              message: notif.contents.en
            });
          }
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
