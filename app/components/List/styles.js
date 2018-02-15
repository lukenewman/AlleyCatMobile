import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  $underlayColor: '$grey',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '$primaryBlack',
  },
  text: {
    fontSize: 16,
    color: '$primaryGreen',
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$primaryGreen',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
});

export default styles;
