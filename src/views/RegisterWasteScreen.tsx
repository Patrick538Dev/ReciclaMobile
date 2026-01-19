import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const materialTabs = ['Plastico', 'Papel', 'Vidro', 'Metal', 'Organico'];

const RegisterWasteScreen: React.FC = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState('Plastico');
  const [unidade, setUnidade] = useState('2.0');

  const logo = require('../../assets/logo.png');

  return (
    <View style={styles.container}>
      {/* Header igual ao saldo */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerLogoWrapper}>
            <Image
              source={logo}
              style={styles.headerLogo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerTitle}>Planeta Verde</Text>
            <Text style={styles.headerSubtitle}>Cadastrar Residuos</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.profileButton} onPress={() => {}}>
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Conteúdo fixo (sem scroll) */}
      <View style={styles.content}>
        {/* Tabs de material */}
        <View style={styles.tabsRow}>
          {materialTabs.map((tab) => {
            const isActive = tab === selectedTab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tabItem, isActive && styles.tabItemActive]}
                onPress={() => setSelectedTab(tab)}
              >
                <Text
                  style={[styles.tabText, isActive && styles.tabTextActive]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Campo Unidade (Un) */}
        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Unidade(Un)</Text>
          <View style={styles.inputBigWrapper}>
            <TextInput
              style={styles.inputBig}
              value={unidade}
              onChangeText={setUnidade}
              keyboardType="decimal-pad"
              placeholder="2.0"
              placeholderTextColor="#C7C7CD"
            />
          </View>
        </View>

        {/* Botão Tirar foto */}
        <TouchableOpacity style={styles.photoButton} activeOpacity={0.8}>
          <Ionicons
            name="camera-outline"
            size={22}
            color="#ffffff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.photoButtonText}>Tirar foto</Text>
        </TouchableOpacity>

        {/* Texto de itens adicionados */}
        <View style={styles.itensInfo}>
          <Text style={styles.itensTitle}>Itens adicionados 0/10</Text>
          <Text style={styles.itensSubtitle}>
            Nenhum item na lista. Adicione itens e depois finalize o cadastro.
          </Text>
        </View>

        {/* Botões grandes */}
        <TouchableOpacity style={styles.mainButton} activeOpacity={0.8}>
          <Text style={styles.mainButtonText}>Adicionar item à lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainButton} activeOpacity={0.8}>
          <Text style={styles.mainButtonText}>Cadastrar lista</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de menu inferior */}
      <View style={styles.tabBar}>
        {/* Saldo */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Saldo')}
        >
          <Ionicons name="home" size={26} color="#9e9e9e" />
          <Text style={styles.bottomTabLabel}>Saldo</Text>
        </TouchableOpacity>

        {/* Cadastrar (ativo) */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Ionicons name="leaf" size={26} color="#12B24E" />
          <Text style={[styles.bottomTabLabel, styles.bottomTabLabelActive]}>
            Cadastrar
          </Text>
        </TouchableOpacity>

        {/* Históricos */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Extrato')}
        >
          <Ionicons name="time-outline" size={26} color="#9e9e9e" />
          <Text style={styles.bottomTabLabel}>Históricos</Text>
        </TouchableOpacity>

        {/* Resgatar */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ConfirmWaste')}
        >
          <Ionicons name="card-outline" size={26} color="#9e9e9e" />
          <Text style={styles.bottomTabLabel}>Resgatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const GREEN_BACKGROUND = '#12B24E';
const GREEN_DARK = '#0C7F38';
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: GREEN_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerLogo: {
    width: 28,
    height: 28,
  },
  headerTextWrapper: {
    justifyContent: 'center',
  },
  headerTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: WHITE,
    fontSize: 15,
    marginTop: 2,
  },
  profileButton: {
    marginLeft: 'auto',
  },
  profileCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 3,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Conteúdo */
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  /* Tabs */
  tabsRow: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 8,
    backgroundColor: 'transparent',
  },
  tabItemActive: {
    backgroundColor: WHITE,
  },
  tabText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: '600',
  },
  tabTextActive: {
    color: GREEN_BACKGROUND,
    fontWeight: '700',
  },

  /* Campo Unidade */
  fieldBlock: {
    marginBottom: 14,
  },
  label: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  inputBigWrapper: {
    backgroundColor: '#E8F6EA',
    borderRadius: 10,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputBig: {
    fontSize: 24,
    color: '#4d4d4d',
  },

  /* Botão tirar foto */
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: GREEN_DARK,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 6,
    marginBottom: 18,
  },
  photoButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
  },

  /* Itens adicionados */
  itensInfo: {
    marginBottom: 16,
  },
  itensTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  itensSubtitle: {
    color: WHITE,
    fontSize: 14,
  },

  /* Botões principais */
  mainButton: {
    backgroundColor: WHITE,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  mainButtonText: {
    color: GREEN_BACKGROUND,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  /* Barra de menu inferior */
  tabBar: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    paddingTop: 6,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    justifyContent: 'space-around',
  },
  bottomTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabLabel: {
    marginTop: 3,
    fontSize: 12,
    color: '#9e9e9e',
  },
  bottomTabLabelActive: {
    color: '#12B24E',
    fontWeight: '600',
  },
});

export default RegisterWasteScreen;
