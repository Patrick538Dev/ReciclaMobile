import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen({ navigation }) {
  const [mode, setMode] = useState('discente');
  const [showPasswordAluno, setShowPasswordAluno] = useState(false);
  const [showPasswordDiscente, setShowPasswordDiscente] = useState(false);

  // Discente
  const [email, setEmail] = useState('');
  const [discentePassword, setDiscentePassword] = useState('');
  // Aluno
  const [matricula, setMatricula] = useState('');
  const [alunoPassword, setAlunoPassword] = useState('');

  const logo = require('../../assets/logo.png');

  const renderDiscente = () => (
    <View style={styles.formArea}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@email.com.br"
        placeholderTextColor="#BDBDBD"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="************"
        placeholderTextColor="#BDBDBD"
        value={discentePassword}
        onChangeText={setDiscentePassword}
        secureTextEntry={!showPasswordDiscente}
      />
      <View style={styles.showRow}>
        <TouchableOpacity
          onPress={() => setShowPasswordDiscente(!showPasswordDiscente)}
          style={styles.checkboxContainer}
        >
          <Ionicons
            name={showPasswordDiscente ? 'checkbox' : 'square-outline'}
            size={22}
            color="#fff"
          />
          <Text style={styles.showText}>Mostrar Senha</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DiscenteRegister')}
        style={styles.mainButton}
      >
        <Text style={styles.buttonText}>Cadastrar Discente</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAluno = () => (
    <View style={styles.formArea}>
      <Text style={styles.label}>Matrícula</Text>
      <TextInput
        style={styles.input}
        placeholder="999999-0"
        placeholderTextColor="#BDBDBD"
        value={matricula}
        onChangeText={setMatricula}
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="************"
        placeholderTextColor="#BDBDBD"
        value={alunoPassword}
        onChangeText={setAlunoPassword}
        secureTextEntry={!showPasswordAluno}
      />
      <View style={styles.showRow}>
        <TouchableOpacity
          onPress={() => setShowPasswordAluno(!showPasswordAluno)}
          style={styles.checkboxContainer}
        >
          <Ionicons
            name={showPasswordAluno ? 'checkbox' : 'square-outline'}
            size={22}
            color="#fff"
          />
          <Text style={styles.showText}>Mostrar Senha</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterAluno')}
        style={styles.mainButton}
      >
        <Text style={styles.buttonText}>Cadastrar Aluno</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo e título */}
      <View style={styles.logoTitleContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.projectTitle}>Planeta Verde</Text>
      </View>

      {/* Alternância modo Aluno / Discente */}
      <View style={styles.switchBar}>
        <TouchableOpacity
          style={[styles.switchBtn, mode === 'aluno' && styles.switchSelected]}
          onPress={() => setMode('aluno')}
        >
          <Text style={[styles.switchText, mode === 'aluno' && styles.switchTextSelected]}>Aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.switchBtn, mode === 'discente' && styles.switchSelected]}
          onPress={() => setMode('discente')}
        >
          <Text style={[styles.switchText, mode === 'discente' && styles.switchTextSelected]}>Discente</Text>
        </TouchableOpacity>
      </View>

      {/* Formulário de login */}
      {mode === 'aluno' ? renderAluno() : renderDiscente()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5E20',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 14,
  },
  logoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 24,
    width: '100%',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginRight: 11,
    padding: 7,
  },
  projectTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  switchBar: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 8,
    borderRadius: 9,
    backgroundColor: '#135f2a',
    width: 210,
    height: 38,
    overflow: 'hidden',
  },
  switchBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: '100%',
  },
  switchSelected: {
    backgroundColor: '#fff',
  },
  switchText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  switchTextSelected: {
    color: '#1B5E20',
    fontWeight: 'bold',
  },
  formArea: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 28,
    marginTop: 6,
  },
  label: {
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 3,
    fontSize: 15,
    marginTop: 7,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 13,
    color: '#1B5E20',
  },
  showRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 12,
    marginBottom: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 7,
  },
  mainButton: {
    backgroundColor: '#fff',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    elevation: 1,
  },
  buttonText: {
    color: '#1B5E20',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
