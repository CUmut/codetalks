import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './RoomCard.style';

const RoomCard = ({room, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.name}>{room.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RoomCard;
