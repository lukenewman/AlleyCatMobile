import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { Container } from '../components/Container';
import { ListItem, Separator } from '../components/List';
import notifications from '../data/notifications';

class NotificationList extends Component {
  handlePress = () => {
    console.log('row press');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: '#000' }}>
          <StatusBar barStyle="default" translucent={false} />
          <FlatList
            data={notifications}
            renderItem={({ item }) => <ListItem text={item} onPress={this.handlePress} />}
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
          />
        </View>
        <TouchableWithoutFeedback onPress={this.showLogin}>
          <View style={styles.button}>
            <Text style={styles.text}>{'to log in (dev only)'}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  button: {
    marginTop: 50,
    width: '50%',
    height: 50,
    backgroundColor: '$grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '$primaryGreen',
  },
  text: {
    color: '$primaryGreen',
  },
});

export default NotificationList;
