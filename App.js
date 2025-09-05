import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import LoginScreen from "../ReciclaMobile/src/views/MainMenuScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#1e5235" />
      <LoginScreen /> {}
    </SafeAreaView>
  );
}
