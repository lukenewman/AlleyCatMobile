import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const BUTTON_WIDTH = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '$primaryGreen',
    borderRadius: 4,
    width: BUTTON_WIDTH,
    marginVertical: 30,
  },
  text: {
    color: '$primaryGreen',
    paddingVertical: 10,
    fontWeight: '600',
  },
});

export default styles;
