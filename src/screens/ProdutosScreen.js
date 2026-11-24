import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { produtos } from '../data/produtos';
import ProductCard from '../components/ProductCard';

export default function ProdutosScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        
        renderItem={({ item }) => (
          <ProductCard produto={item} onAdd={() => {}} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 16,
  },
});