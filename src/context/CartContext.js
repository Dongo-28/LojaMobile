import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [itens, setItens] = useState([]);

  // ---- Adicionar: se já existe, incrementa a quantidade ----
  const adicionar = (produto) => {
    console.log('ADICIONAR foi chamado com:', produto.nome);
    setItens((prev) => {
      const existente = prev.find((i) => i.id === produto.id);

      if (existente) {
        // map: devolve um NOVO array com o item alterado
        return prev.map((i) =>
          i.id === produto.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }

      // spread: novo array + item novo (com quantidade inicial 1)
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  // ---- Remover: decrementa; se chegar a 0, sai da lista ----
  const remover = (id) => {
    setItens((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantidade: i.quantidade - 1 } : i
        )
        .filter((i) => i.quantidade > 0)
    );
  };

  // ---- Limpar: array vazio ----
  const limpar = () => setItens([]);

  // ---- Derivados: recalculados a cada render ----
  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);
  const totalPreco = itens.reduce(
    (acc, i) => acc + i.preco * i.quantidade,
    0
  );

  return (
    <CartContext.Provider
      value={{
        itens,
        adicionar,
        remover,
        limpar,
        totalItens,
        totalPreco,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'useCart deve ser usado dentro de um <CartProvider>. ' +
      'Verifica se envolviste o App no CartProvider.'
    );
  }
  return context;
}