import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 6,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  name: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 20,
    margin: 3,
    padding: 5,
    marginHorizontal: 10,
  },
});
