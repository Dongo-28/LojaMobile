import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function CarrinhoScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.emptyIcon]}>🛒</Text>
      <Text style={[styles.emptyText, { color: theme.subtext }]}>
        Carrinho vazio
      </Text>
      <Text style={[styles.hint, { color: theme.subtext }]}>
        (A Parte 2 vai preencher este ecrã)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  hint: {
    fontSize: 13,
    fontStyle: 'italic',
  },
});