import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

const lightTheme = {
  mode: 'light',
  background: '#F2F2F2',
  card: '#FFFFFF',
  text: '#1A1A1A',
  subtext: '#666666',
  primary: '#2E7D32',
  border: '#E0E0E0',
  headerBg: '#2E7D32',
  headerText: '#FFFFFF',
  tabBarBg: '#FFFFFF',
  tabBarInactive: '#888888',
};

const darkTheme = {
  mode: 'dark',
  background: '#121212',
  card: '#1E1E1E',
  text: '#F5F5F5',
  subtext: '#AAAAAA',
  primary: '#66BB6A',
  border: '#333333',
  headerBg: '#1B5E20',
  headerText: '#FFFFFF',
  tabBarBg: '#1E1E1E',
  tabBarInactive: '#777777',
};


export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? darkTheme : lightTheme;
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useTheme deve ser usado dentro de um <ThemeProvider>. ' +
      'Verifica se envolviste o App (ou a parte da árvore) no ThemeProvider.'
    );
  }
  return context;
}