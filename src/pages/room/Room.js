import React, {useState, useEffect} from 'react';
import {SafeAreaView, Button, FlatList, Text, View} from 'react-native';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInput/ContentInputModal';
import database from '@react-native-firebase/database';
import styles from './Room.style';
import parseContentData from '../../utils/parseContentData';
import RoomCard from '../../components/Card/RoomCard/RoomCard';

const Room = ({navigation, route}) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        if (!contentData) {
          return;
        }
        const parsedData = parseContentData(contentData);
        setRoomList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  const handleRoomSelect = room => {
    navigation.navigate('MessagePage', {room});
  };

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const contentObject = {
      name: content,
    };
    database().ref('/rooms').push(contentObject);
  }
  const renderContent = ({item}) => (
    <RoomCard room={item} onSelect={() => handleRoomSelect(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Odalar</Text>
      </View>
      <FlatList data={roomList} numColumns={2} renderItem={renderContent} />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        title="Ekle"
        placeholder="Oda Adı..."
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Room;
