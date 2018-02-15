import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 3;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
    marginBottom: 50,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$primaryGreen',
  },
});

export default styles;
