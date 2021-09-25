import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../../components/Input/Input';
import styles from './Sign.style';
import Button from '../../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.goBack('LoginPage');
  }
  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler Uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
        navigation.goBack('LoginPage'),
        setLoading(false),
      );

      showMessage({
        message: 'Kullanıcı Oluşturuldu',
        type: 'success',
      });
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
      <Text style={styles.header}>codetalks </Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.email}
              onType={handleChange('email')}
              placeholder="E-Postanızı Giriniz"
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              isSecure
              placeholder="Şifreninizi Giriniz"
            />
            <Input
              onType={handleChange('repassword')}
              value={values.repassword}
              isSecure
              placeholder="Şifrenizi Tekrar Giriniz"
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>

      <Button text="Geri" onPress={handleLogin} theme="secondary" />
    </SafeAreaView>
  );
};

export default Sign;
