import { useState } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function PerfilScreen() {
  const { theme, isDark, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  // Estado local para o input do nome
  const [nomeInput, setNomeInput] = useState('');

  const handleLogin = () => {
    if (nomeInput.trim() === '') return; // ignora nomes vazios
    login(nomeInput.trim());
    setNomeInput(''); // limpa o input após entrar
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Secção: Aparência */}
      <View
        style={[
          styles.section,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: theme.subtext }]}>
          Aparência
        </Text>
        <View style={styles.row}>
          <Text style={[styles.rowLabel, { color: theme.text }]}>
            Tema escuro
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: '#CCCCCC', true: theme.primary }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      {/* Secção: Conta (AuthContext) */}
      <View
        style={[
          styles.section,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: theme.subtext }]}>
          Conta
        </Text>

        {user ? (
          // Utilizador autenticado
          <View>
            <Text style={[styles.bemVindo, { color: theme.text }]}>
              Olá, {user.nome}!
            </Text>
            <TouchableOpacity
              onPress={logout}
              style={[styles.actionBtn, { borderColor: '#E53935' }]}
            >
              <Text style={{ color: '#E53935', fontWeight: 'bold' }}>
                Sair
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Visitante (não autenticado)
          <View>
            <TextInput
              placeholder="O teu nome..."
              placeholderTextColor={theme.subtext}
              value={nomeInput}
              onChangeText={setNomeInput}
              style={[
                styles.input,
                { color: theme.text, borderColor: theme.border },
              ]}
            />
            <TouchableOpacity
              onPress={handleLogin}
              style={[styles.actionBtn, { backgroundColor: theme.primary, borderColor: theme.primary }]}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  actionBtn: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  bemVindo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
});