import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({message}) => {
  const formatteDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.name}>{message.username}</Text>
        <Text style={styles.date}>{formatteDate}</Text>
      </View>
      <Text style={styles.text}>{message.text}</Text>
    </SafeAreaView>
  );
};

export default MessageCard;
