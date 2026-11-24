import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export default function CarrinhoScreen() {
  const { theme } = useTheme();
  const { itens, adicionar, remover, limpar, totalPreco } = useCart();

  // 1. Ecrã Vazio (quando não há itens)
  if (itens.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={styles.emptyIcon}>🛒</Text>
        <Text style={[styles.emptyText, { color: theme.subtext }]}>
          Carrinho vazio
        </Text>
      </View>
    );
  }

  // 2. Ecrã com Itens
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>

            <View style={styles.info}>
              <Text style={[styles.nome, { color: theme.text }]}>
                {item.nome}
              </Text>
              <Text style={[styles.preco, { color: theme.primary }]}>
                {item.preco} CVE
              </Text>
            </View>

            {/* Controlos de quantidade (+ / -) */}
            <View style={styles.controls}>
              <TouchableOpacity
                onPress={() => remover(item.id)}
                style={[styles.btn, { backgroundColor: theme.border }]}
              >
                <Text style={[styles.btnText, { color: theme.text }]}>−</Text>
              </TouchableOpacity>

              <Text style={[styles.quantidade, { color: theme.text }]}>
                {item.quantidade}
              </Text>

              <TouchableOpacity
                onPress={() => adicionar(item)}
                style={[styles.btn, { backgroundColor: theme.primary }]}
              >
                <Text style={[styles.btnText, { color: '#FFF' }]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Rodapé: Total e Botão Limpar */}
      <View style={[styles.footer, { backgroundColor: theme.card, borderTopColor: theme.border }]}>
        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, { color: theme.text }]}>Total:</Text>
          <Text style={[styles.totalValue, { color: theme.primary }]}>
            {totalPreco} CVE
          </Text>
        </View>

        <TouchableOpacity
          onPress={limpar}
          style={[styles.limparBtn, { borderColor: '#E53935' }]}
        >
          <Text style={{ color: '#E53935', fontWeight: 'bold' }}>Limpar Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  emoji: {
    fontSize: 28,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  preco: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  btn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantidade: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 20,
    textAlign: 'center',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  limparBtn: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 12,
    textAlign: 'center',
    marginTop: 100, // Para centrar o ícone no ecrã vazio
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});