import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useMenuViewModel } from "../viewsmodels/MenuViewModel";

export default function MenuScreen() {
  const { handleRegisterWaste, handleBalance, handleHistory, handleProfile, handleInstagram } =
    useMenuViewModel();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.headerTitle}>Recicla Fácil</Text>
      </View>

      {/* Logo Central */}
      <View style={styles.logoBox}>
        <Image source={require("../../assets/logo.png")} style={styles.logoCenter} />
      </View>

      {/* Títulos */}
      <Text style={styles.title}>Menu Principal</Text>
      <Text style={styles.subtitle}>Seu parceiro em sustentabilidade</Text>

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={handleRegisterWaste}>
        <Text style={styles.buttonText}>Cadastrar resíduos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleBalance}>
        <Text style={styles.buttonText}>Ver Saldo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleHistory}>
        <Text style={styles.buttonText}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleProfile}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleInstagram}>
        <Text style={styles.buttonText}>Seguir no instagram</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2E7D32", alignItems: "center", padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  logo: { width: 30, height: 30, marginRight: 8 },
  headerTitle: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  logoBox: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  logoCenter: { width: 40, height: 40, resizeMode: "contain" },

  title: { color: "#fff", fontSize: 22, fontWeight: "bold", marginBottom: 6 },
  subtitle: { color: "#fff", fontSize: 14, marginBottom: 20 },

  button: {
    backgroundColor: "#6D8F78",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: "center",
    width: "80%",
  },
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "bold" },
});
