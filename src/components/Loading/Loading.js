import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './Loading.style';

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="small" color="#ffb300" />
    </View>
  );
};

export default Loading;
