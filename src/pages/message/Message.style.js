import {StyleSheet} from 'react-native';
import colors from '../../styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb300',
  },
  inner_title: {
    backgroundColor: '#ffb300',
    color: '#ffb300',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    color: 'white',
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
