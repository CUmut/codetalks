import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../styles/color';

const Header = ({text}) => {
  return <Text style={styles.container}>{text} odası kuruldu!</Text>;
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
    margin: 10,
    padding: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Header;
