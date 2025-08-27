import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRegisterWasteViewModel } from "../viewsmodels/RegisterWasteViewModel";

export default function RegisterWasteScreen() {
  const { wasteType, setWasteType, weight, setWeight, handleUploadPhoto, handleRegister } =
    useRegisterWasteViewModel();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Cadastrar de Resíduos</Text>
        </View>
      </View>

      {/* Tipo de Resíduo */}
      <Text style={styles.label}>Tipo de Resíduo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Plástico"
        placeholderTextColor="#999"
        value={wasteType}
        onChangeText={setWasteType}
      />

      {/* Peso */}
      <Text style={styles.label}>Peso (Kg)</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={weight}
          style={styles.picker}
          dropdownIconColor="#fff"
          onValueChange={(itemValue) => setWeight(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
        </Picker>
      </View>

      {/* Botão Upload */}
      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPhoto}>
        <Text style={styles.uploadText}>📷 Upload Foto</Text>
      </TouchableOpacity>

      {/* Botão Cadastrar */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Cadastrar Resíduo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1B5E20", padding: 75 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  logo: { width: 40, height: 40, borderRadius: 6, marginRight: 10 },
  headerText: { flexDirection: "column" },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  headerSubtitle: { color: "#fff", fontSize: 14 },

  label: { color: "#fff", fontSize: 16, marginTop: 10 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 6,
  },

  pickerContainer: {
    backgroundColor: "#2E7D32",
    borderRadius: 8,
    marginTop: 6,
  },
  picker: { color: "#fff" },

  uploadButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  uploadText: { color: "#1B5E20", fontWeight: "bold" },

  registerButton: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#fff",
  },
  registerText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
