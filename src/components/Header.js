import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { theme, isDark, toggleTheme } = useTheme();
  const { totalItens } = useCart();
  const { user } = useAuth();

  return (
    <View style={[styles.container, { backgroundColor: theme.headerBg }]}>
      <View style={styles.left}>
        <Text style={[styles.title, { color: theme.headerText }]}>
          Loja Mobile
        </Text>
        <Text style={[styles.saudacao, { color: theme.headerText }]}>
          {user ? `Olá, ${user.nome}!` : 'Visitante'}
        </Text>
      </View>

      <View style={styles.right}>
        {totalItens > 0 && (
          <View style={styles.cartInfo}>
            <Text style={styles.cartIcon}>🛒</Text>
            <Text style={styles.cartCount}>{totalItens}</Text>
          </View>
        )}

        <TouchableOpacity
          onPress={toggleTheme}
          style={styles.button}
          accessibilityLabel={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          <Text style={styles.icon}>{isDark ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  saudacao: {
    fontSize: 13,
    opacity: 0.85,
    marginTop: 2,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cartIcon: {
    fontSize: 18,
  },
  cartCount: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    padding: 8,
  },
  icon: {
    fontSize: 22,
  },
});