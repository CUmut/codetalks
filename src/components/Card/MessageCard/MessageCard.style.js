import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 5,
  },
  name: {
    left: 5,
    marginTop: 3,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 2,
    marginHorizontal: 10,
  },
  date: {
    fontSize: 11,
    fontStyle: 'italic',
    left: 150,
    marginHorizontal: 150,
    flexDirection: 'row',
  },
});
