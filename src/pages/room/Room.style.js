import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 6,
  },
  title: {
    color: colors.orange,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 5,
    padding: 5,
    margin: 5,
  },
  title_container: {
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
