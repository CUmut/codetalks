import {StyleSheet} from 'react-native';

import colors from '../../styles/color';

const base_style = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.orange,
      borderColor: colors.orange,
      borderWidth: 1,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),

  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderColor: colors.orange,
      borderWidth: 1,
    },
    title: {
      ...base_style.title,
      color: '#ffa000',
    },
  }),
};
