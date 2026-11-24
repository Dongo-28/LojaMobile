import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { produtos } from '../data/produtos';
import ProductCard from '../components/ProductCard';

export default function ProdutosScreen() {
  const { theme } = useTheme();
  const { adicionar } = useCart();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard produto={item} onAdd={() => adicionar(item)} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { paddingVertical: 16 },
});