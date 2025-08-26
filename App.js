import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import LoginScreen from "./src/views/LoginScreen.tsx";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#1e5235" />
      <LoginScreen /> {}
    </SafeAreaView>
  );
}
