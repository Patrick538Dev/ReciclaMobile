import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSaldoViewModel } from "../viewsmodels/SaldoViewModel";

export default function SaldoScreen({ navigation }) {
  const { saldo } = useSaldoViewModel();

  const saldoResgate = 0.0;
  const saldoPendente = 0.0;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerLogoWrapper}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerTitle}>Planeta Verde</Text>
            <Text style={styles.headerSubtitle}>Saldo</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={26} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Saldo principal */}
      <View style={styles.content}>
        <Text style={styles.saldoInfo}>Seu saldo para resgate</Text>
        <Text style={styles.saldoResgate}>
          R$ {saldoResgate.toFixed(2).replace(".", ",")}
        </Text>

        <Text style={[styles.saldoInfo, { marginTop: 24 }]}>
          Saldo pendente de Aprovação
        </Text>
        <Text style={styles.saldoPendente}>
          R$ {saldoPendente.toFixed(2).replace(".", ",")}
        </Text>

        <Text style={styles.semLancamentos}>Sem lançamentos ainda</Text>

        {/* Botão Gerar QRCode */}
        <TouchableOpacity
          style={styles.qrButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("RegisterAluno")}
        >
          <Text style={styles.qrButtonText}>Gerar QRCode</Text>
        </TouchableOpacity>

        <Text style={styles.obsText}>
          Finalize um cadastro para gerar o QR Code.
        </Text>
      </View>

      {/* Barra de menu inferior */}
      <View style={styles.tabBar}>
        {/* Saldo (ativo) */}
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Saldo")}
        >
          <Ionicons name="home" size={28} color="#12B24E" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Saldo</Text>
        </TouchableOpacity>

        {/* Cadastrar -> RegisterWasteScreen */}
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("RegisterWaste")}
        >
          <Ionicons name="leaf" size={28} color="#9e9e9e" />
          <Text style={styles.tabLabel}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Históricos */}
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Extrato")}
        >
          <Ionicons name="time-outline" size={28} color="#9e9e9e" />
          <Text style={styles.tabLabel}>Históricos</Text>
        </TouchableOpacity>

        {/* Resgatar */}
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("ConfirmWaste")}
        >
          <Ionicons name="card-outline" size={28} color="#9e9e9e" />
          <Text style={styles.tabLabel}>Resgatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const GREEN_BACKGROUND = "#12B24E";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 38,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogoWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#0C7F38",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerLogo: {
    width: 28,
    height: 28,
  },
  headerTextWrapper: {
    justifyContent: "center",
  },
  headerTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "700",
  },
  headerSubtitle: {
    color: WHITE,
    fontSize: 16,
    marginTop: 2,
  },
  profileButton: {
    marginLeft: "auto",
  },
  profileCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: WHITE,
    justifyContent: "center",
    alignItems: "center",
  },

  /* Conteúdo central */
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 24,
  },
  saldoInfo: {
    color: WHITE,
    fontSize: 18,
    textAlign: "center",
  },
  saldoResgate: {
    color: WHITE,
    fontSize: 64,
    fontWeight: "bold",
    marginTop: 14,
    letterSpacing: 2,
    textAlign: "center",
  },
  saldoPendente: {
    color: WHITE,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  semLancamentos: {
    color: WHITE,
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },

  /* Botão Gerar QRCode */
  qrButton: {
    marginTop: 40,
    backgroundColor: WHITE,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignSelf: "stretch",
    marginHorizontal: 24,
  },
  qrButtonText: {
    color: GREEN_BACKGROUND,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  obsText: {
    color: WHITE,
    fontSize: 15,
    textAlign: "center",
    marginTop: 18,
  },

  /* Barra de menu inferior */
  tabBar: {
    flexDirection: "row",
    backgroundColor: WHITE,
    paddingTop: 6,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    justifyContent: "space-around",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    marginTop: 3,
    fontSize: 12,
    color: "#9e9e9e",
  },
  tabLabelActive: {
    color: "#12B24E",
    fontWeight: "600",
  },
});
