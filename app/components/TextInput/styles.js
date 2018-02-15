import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({
  container: {
    width: '80%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    borderWidth: 1,
    borderColor: '$primaryGreen',
  },
  labelContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  labelText: {
    fontWeight: '600',
    fontSize: 15,
    paddingHorizontal: 16,
    color: '$primaryGreen',
    textAlign: 'center',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 11,
    color: '$primaryGreen',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth * 2,
    backgroundColor: '$primaryGreen',
  },
});

export default styles;
