import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { CartProvider } from './src/context/CartContext';
import { AuthProvider } from './src/context/AuthContext';
import Header from './src/components/Header';
import TabBar from './src/components/TabBar';
import ProdutosScreen from './src/screens/ProdutosScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';
import PerfilScreen from './src/screens/PerfilScreen';

function Conteudo() {
  const [activeTab, setActiveTab] = useState('produtos');
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />

      <View style={styles.content}>
        {activeTab === 'produtos' && <ProdutosScreen />}
        {activeTab === 'carrinho' && <CarrinhoScreen />}
        {activeTab === 'perfil' && <PerfilScreen />}
      </View>

      <TabBar activeTab={activeTab} onChangeTab={setActiveTab} />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Conteudo />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});