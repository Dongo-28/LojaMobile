import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';


const tabs = [
  { key: 'produtos', label: 'Produtos', icon: '🛍️' },
  { key: 'carrinho', label: 'Carrinho', icon: '🛒' },
  { key: 'perfil',   label: 'Perfil',   icon: '👤' },
];

export default function TabBar({ activeTab, onChangeTab }) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.tabBarBg,
          borderTopColor: theme.border,
        },
      ]}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onChangeTab(tab.key)}
            accessibilityLabel={`Ir para ${tab.label}`}
          >
            <Text style={[styles.icon, { opacity: isActive ? 1 : 0.5 }]}>
              {tab.icon}
            </Text>
            <Text
              style={[
                styles.label,
                { color: isActive ? theme.primary : theme.tabBarInactive },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingBottom: 24,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  icon: {
    fontSize: 22,
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});