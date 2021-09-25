import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleSignup() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate('RoomPage'), setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
      return;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> codetalks </Text>

      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.email}
              onType={handleChange('email')}
              placeholder="E-Postanızı Giriniz"
            />
            <Input
              isSecure
              onType={handleChange('password')}
              value={values.password}
              placeholder="Şifreninizi Giriniz"
            />
            <Button
              text="Giriş Yap"
              onPress={handleSubmit}
              loading={loading}></Button>
          </>
        )}
      </Formik>

      <Button text="Kayıt Ol" onPress={handleSignup} theme="secondary" />
    </SafeAreaView>
  );
};

export default Login;
