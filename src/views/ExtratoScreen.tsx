import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ExtratoViewModel from '../models/ExtratoModel';

export default function ExtratoScreen({ navigation }: any) {
  const viewModel = new ExtratoViewModel();
  const itens = viewModel.getItens();

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.tipo}>{item.tipo}</Text>
        <Text style={styles.quantidade}>{item.quantidade}</Text>
      </View>
      <View style={styles.detalhes}>
        <Text style={styles.valor}>R$ {item.valor},00</Text>
        <Text style={styles.data}>{item.data}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Histórico de Atividades</Text>
        </View>
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
    backgroundColor: '#1B5E20',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1B5E20',
    marginTop: 45,
  },
  backButton: {
    marginRight: 12,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
  listContainer: {
    padding: 20,
    marginTop: 35,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3C6E47',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  tipo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantidade: {
    fontSize: 14,
    color: '#ddd',
  },
  detalhes: {
    alignItems: 'flex-end',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  data: {
    fontSize: 13,
    color: '#ddd',
  },
});
