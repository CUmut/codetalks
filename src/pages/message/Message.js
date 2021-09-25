import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/Card/MessageCard/MessageCard';
import Header from '../../components/Header/Header';
import styles from './Message.style';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import auth from '@react-native-firebase/auth';
import ContentInputModal from '../../components/Modal/ContentInput/ContentInputModal';

const Message = ({route}) => {
  const [messageList, setMessageList] = useState([]);
  const [inputModalVisible, setInputModalVisible] = useState(false);

  useEffect(() => {
    database()
      .ref('rooms/' + route.params.room.id + '/messages')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        if (!contentData) {
          return;
        }
        const parsedData = parseContentData(contentData);
        setMessageList(parsedData);
      });
  }, [route.params.room.id]);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    var ref = database().ref();
    ref
      .child('rooms/' + route.params.room.id + '/messages')
      .push(contentObject);
  }

  const renderContent = ({item}) => <MessageCard message={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.title_container}>
        <Text style={styles.title}>{route.params.room.name}</Text>
      </View> */}
      <View style={styles.inner_title}>
        <Header text={route.params.room.name.toLowerCase()} />
      </View>
      <FlatList data={messageList} renderItem={renderContent} />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        title="Gönder"
        placeholder="Mesajınız.."
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Message;
