import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./src/views/WelcomeScreen";
import LoginScreen from "./src/views/LoginScreen";
import LoginScreen2 from "./src/views/LoginScreen2";
import RegisterScreenAluno from "./src/views/RegisterScreenAluno"; // Importação correta do arquivo
import SaldoScreen from "./src/views/SaldoScreen";
import ExtratoScreen from "./src/views/ExtratoScreen";
import ConfirmWasteScreen from "./src/views/ConfirmWasteScreen";
import RegisterWasteScreen from "./src/views/RegisterWasteScreen";
import ProfileScreen from "./src/views/ProfileScreen";
import MenuScreen from "./src/views/MenuScreen";
import EditProfileScreen from "./src/views/EditProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logine" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Logine" component={LoginScreen2} />
        <Stack.Screen name="RegisterAluno" component={RegisterScreenAluno} />
        <Stack.Screen name="Saldo" component={SaldoScreen} />
        <Stack.Screen name="Extrato" component={ExtratoScreen} />
        <Stack.Screen name="ConfirmWaste" component={ConfirmWasteScreen} />
        <Stack.Screen name="RegisterWaste" component={RegisterWasteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
