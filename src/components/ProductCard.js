import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AddButton from './AddButton';

export default function ProductCard({ produto, onAdd }) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <Text style={styles.emoji}>{produto.emoji}</Text>

      <View style={styles.info}>
        <Text style={[styles.nome, { color: theme.text }]} numberOfLines={2}>
          {produto.nome}
        </Text>
        <Text style={[styles.preco, { color: theme.primary }]}>
          {produto.preco} CVE
        </Text>
      </View>

      <AddButton onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  emoji: {
    fontSize: 32,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  preco: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});