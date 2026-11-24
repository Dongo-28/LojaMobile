import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.headerBg }]}>
      <Text style={[styles.title, { color: theme.headerText }]}>
        Loja Mobile
      </Text>

      <TouchableOpacity
        onPress={toggleTheme}
        style={styles.button}
        accessibilityLabel={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      >
        <Text style={styles.icon}>{isDark ? '☀️' : '🌙'}</Text>
      </TouchableOpacity>
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
  title: { fontSize: 20, fontWeight: 'bold'},
  button: { padding: 8},
  icon: { fontSize: 22},
});