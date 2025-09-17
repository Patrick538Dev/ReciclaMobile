// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/views/WelcomeScreen';
import LoginScreen from './src/views/LoginScreen';
import LoginScreen from './src/views/RegisterScreenAluno';
// importe outras telas conforme necessário

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreenAluno" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* outras telas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
