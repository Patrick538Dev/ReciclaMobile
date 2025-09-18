import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ExtratoViewModel from '../viewsmodels/ExtratoViewModel';

export default function ExtratoScreen({ navigation }) {
  const viewModel = new ExtratoViewModel();
  const itens = viewModel.getItens();

  // Retorna o ícone e cor para cada item dependendo da validação
  const getIconData = (index) => {
    if (index === 0) {
      // Primeiro item com alerta
      return { name: 'alert-circle', color: '#a12b22', bg: '#f5f4f6' };
    }
    // Outros com check verde
    return { name: 'checkmark-circle', color: '#5b7c6e', bg: '#e2ede6' };
  };

  const renderItem = ({ item, index }) => {
    const iconData = getIconData(index);

    return (
      <View style={styles.card}>
        <View style={[styles.iconCircle, { backgroundColor: iconData.bg || '#eaeaea' }]}>
          <Ionicons
            name={iconData.name}
            size={28}
            color={iconData.color}
          />
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.tipo}>{item.tipo}</Text>
          <Text style={styles.quantidade}>{item.quantidade}</Text>
        </View>
        <View style={styles.detailsArea}>
          <Text style={styles.valor}>{`R$ ${parseFloat(item.valor).toFixed(2).replace('.', ',')}`}</Text>
          <Text style={styles.data}>{item.data}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Planeta Verde</Text>
          <Text style={styles.headerSubtitle}>Histórico de atividades</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#276846',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 38,
    paddingBottom: 10,
  },
  backButton: {
    marginRight: 5,
    padding: 3,
  },
  menuButton: {
    marginLeft: 'auto',
    padding: 3,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginLeft: 6,
    marginRight: 3,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  headerSubtitle: {
    color: '#bbd9c6',
    fontSize: 13,
    marginTop: 1,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6da486',
    borderRadius: 24,
    marginVertical: 13,
    paddingVertical: 8,
    paddingHorizontal: 14,
    elevation: 3,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  infoArea: {
    flex: 1,
    justifyContent: 'center',
  },
  detailsArea: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  tipo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  quantidade: {
    fontSize: 14,
    color: '#e2ede6',
    fontWeight: '500',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  data: {
    fontSize: 14,
    color: '#e2ede6',
    fontWeight: '500',
    marginTop: 2,
  },
});
