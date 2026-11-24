import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

const tabs = [
  { key: 'produtos', label: 'Produtos', icon: '🛍️' },
  { key: 'carrinho', label: 'Carrinho', icon: '🛒' },
  { key: 'perfil',   label: 'Perfil',   icon: '👤' },
];

export default function TabBar({ activeTab, onChangeTab }) {
  const { theme } = useTheme();
  const { totalItens } = useCart();

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
        const showBadge = tab.key === 'carrinho' && totalItens > 0;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onChangeTab(tab.key)}
            accessibilityLabel={`Ir para ${tab.label}`}
          >
            <View>
              <Text style={[styles.icon, { opacity: isActive ? 1 : 0.5 }]}>
                {tab.icon}
              </Text>

              {showBadge && (
                <View style={[styles.badge, { backgroundColor: '#E53935' }]}>
                  <Text style={styles.badgeText}>{totalItens}</Text>
                </View>
              )}
            </View>

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
  badge: {
    position: 'absolute',
    top: -4,
    right: -12,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
});