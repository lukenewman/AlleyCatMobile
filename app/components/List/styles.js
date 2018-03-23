import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: '$primaryBlack',
  },
  logoTitleContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '$primaryGreen',
    paddingLeft: 10,
  },
  message: {
    fontSize: 16,
    color: '$grey',
  },
  separator: {
    backgroundColor: '$primaryGreen',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default styles;
