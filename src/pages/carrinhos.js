import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import useStorage from "./useStorage";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { data } from "./dataService";

export default function App() {
  const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadProdutos() {
      const produtos = await getItem("@pass");
      setCarrinhoProdutos(produtos);
    }
    loadProdutos();
  }, [focused]);

  const produtosNaFlatList = carrinhoProdutos.map((produtoId) => {
    const produtoEncontrado = data.find((produto) => produto.id === produtoId);
    return produtoEncontrado;
  });

  const handleRemoveItem = async (item) => {
    const novoCarrinhoProdutos = await removeItem("@pass", item.id);
    setCarrinhoProdutos(novoCarrinhoProdutos);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={produtosNaFlatList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.produtoCar}
            onLongPress={() => handleRemoveItem(item)}
          >
            <View style={styles.fundoBranco}>
              <Image source={item.image} style={styles.imagemProduto} />
            </View>
            <Text style={styles.produtoTextNome}>{item.nome}</Text>
            <Text style={styles.produtoTextPreco}>{item.preco}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  produtoCar: {
    backgroundColor: "#6C008B",
    borderRadius: 20,
    margin: 10,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#6C008B ",
  },
  imagemProduto: {
    alignItems: "center",
    marginRight: 20,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
  },
  produtoTextNome: {
    color: "#FFF",
    fontSize: 18,
    marginLeft: 10,
    width: 200,
    marginTop: 5,
  },

  produtoTextPreco: {
    color: "#FFF",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 70,
    fontWeight: "bold",
  },

  fundoBranco: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 10,
  },
});
