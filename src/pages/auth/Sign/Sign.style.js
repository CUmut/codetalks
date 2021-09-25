import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../../styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6f00',
  },
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width * 0.9,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logo_container: {
    justifyContent: 'center',
  },
  body_container: {flex: 1},
  header: {
    color: '#e0e0e0',
    margin: 20,
    padding : 60,
    fontSize: 50,
  },
});
