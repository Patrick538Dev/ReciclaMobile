// src/viewmodels/MenuViewModel.ts
import { useNavigation } from "@react-navigation/native";

export function useMenuViewModel() {
  const navigation = useNavigation();

  const handleRegisterWaste = () => {
    navigation.navigate("RegisterWaste"); // tela de cadastro de resíduos
  };

  const handleBalance = () => {
    navigation.navigate("Balance"); // tela de saldo
  };

  const handleHistory = () => {
    navigation.navigate("History"); // tela de histórico
  };

  const handleProfile = () => {
    navigation.navigate("Profile"); // tela de perfil
  };

  const handleInstagram = () => {
    // abre o instagram no navegador
    const instagramUrl = "https://instagram.com/seu_perfil"; 
    // se quiser abrir no app, pode usar Linking
    import("react-native").then(({ Linking }) => {
      Linking.openURL(instagramUrl);
    });
  };

  return {
    handleRegisterWaste,
    handleBalance,
    handleHistory,
    handleProfile,
    handleInstagram,
  };
}
