import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Button from '../../Button/Button';
import styles from './ContentInputModal.style';
import Modal from 'react-native-modal';

const ContentInputModal = ({visible, onClose, onSend, placeholder, title}) => {
  const [text, setText] = useState('');
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={setText}
            multiline></TextInput>
        </View>
        <Button text={title} onPress={() => onSend(text)}></Button>
      </View>
    </Modal>
  );
};

export default ContentInputModal;
