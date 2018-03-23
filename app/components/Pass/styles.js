import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const deviceWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '$primaryGreen',
    borderRadius: 30,
    padding: deviceWidth / 6,
  },
  separator: {
    height: 50,
  },
  text: {
    paddingTop: 50,
    color: '$grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
