import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // O utilizador começa a null (não autenticado)
  const [user, setUser] = useState(null);

  // Simulação de login: apenas guarda o nome no estado
  const login = (nome) => {
    setUser({ nome });
  };

  // Logout: limpa o utilizador
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuth deve ser usado dentro de um <AuthProvider>. ' +
      'Verifica se envolviste o App no AuthProvider.'
    );
  }
  return context;
}