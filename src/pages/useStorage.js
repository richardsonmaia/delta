import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key) => {
    try {
      const produtos = await AsyncStorage.getItem(key);
      return JSON.parse(produtos) || [];
    } catch (error) {
      console.log("Erro ao buscar", error);
      return [];
    }
  };

  const saveItem = async (key, value) => {
    try {
      let produtos = await getItem(key);

      produtos.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(produtos));
    } catch (error) {
      console.log("ERRO AO SALVAR", error);
    }
  };

  const removeItem = async (key, item) => {
    try {
      let produtos = await getItem(key);
      let meusProdutos = produtos.filter((produto) => {
        return produto !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(meusProdutos));
      return meusProdutos;
    } catch (error) {
      console.log("ERRO AO DELETAR", error);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
