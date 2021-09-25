import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';
import FlashMessage from 'react-native-flash-message';
import Room from './pages/room/Room';
import Message from './pages/message/Message';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import colors from './styles/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignPage"
          component={Sign}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthStack">
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <>
            <Stack.Screen
              name="RoomPage"
              component={Room}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MessagePage"
              component={Message}
              options={({route, navigation}) => ({
                title: `${route.params.room.name}`,
                headerStyle: {backgroundColor: 'white'},
                headerTitleStyle: {fontSize: 20},
                headerTintColor: '#f9a825',
                headerTitleAlign: 'center',
                headerShown: true,
                headerRight: () => (
                  <Icon
                    name="logout"
                    size={25}
                    color={colors.orange}
                    onPress={() => auth().signOut()}
                  />
                ),
                headerLeft: () => (
                  <Icon
                    name="arrow-left-bold"
                    size={30}
                    color={colors.orange}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ),
              })}
            />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
