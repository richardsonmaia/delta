import { StatusBar, Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import useStorage from "./useStorage";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { data } from "./dataService";
import { ModalPagamento } from "./modalPagamento";

const FinalizarCompraButton = ({ onPress }) => (
  <TouchableOpacity style={styles.finalizarCompraButton} onPress={onPress}>
    <Text style={styles.finalizarCompraButtonText}>Finalizar Compra</Text>
  </TouchableOpacity>
);

export default function App() {
  const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);
  const focused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const { getItem, removeItem } = useStorage();
  function abrirPagamento() {
    setModalVisible(true);
  }

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

  const valorTotal = produtosNaFlatList.reduce(
    (total, produto) => total + produto.preco,
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtosNaFlatList}
        keyExtractor={(item, index) =>
          item && item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.produtoCar}
            onLongPress={() => handleRemoveItem(item)}
          >
            <View style={styles.fundoBranco}>
              <Image source={item.image} style={styles.imagemProduto} />
            </View>
            <Text style={styles.produtoTextNome}>{item.nome}</Text>
            <Text style={styles.produtoTextPreco}>R$ {item.preco}</Text>
          </TouchableOpacity>
        )}
      />
      {produtosNaFlatList.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: {valorTotal.toFixed(2)}</Text>
        </View>
      )}
      {produtosNaFlatList.length === 0 && (
        <Text style={styles.mensagemCarrinhoVazio}>Carrinho vazio</Text>
      )}
      {produtosNaFlatList.length > 0 && (
        <TouchableOpacity
          style={styles.finalizarCompraButton}
          onPress={() => abrirPagamento()}
        >
          <Text style={styles.finalizarCompraButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      )}
      <Modal visible={modalVisible}>
        <ModalPagamento handleClose={() => setModalVisible(false)} />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  totalContainer: {
    backgroundColor: "#6C008B",
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  totalText: {
    color: "#FFF",
    fontSize: 18,
    fontSize: 24,
    fontWeight: "bold",
  },
  mensagemCarrinhoVazio: {
    textAlign: "center",
    fontSize: 30,
    color: "#6C008B",
    marginTop: 280,
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
  finalizarCompraContainer: {
    position: "absolute",
    bottom: 0,
    borderRadius: 20,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#6C008B",
    alignItems: "center",
  },
  finalizarCompraButton: {
    position: "absolute",
    marginTop: 600,
    marginLeft: 113,
    borderWidth: 5,
    borderRadius: 18,
    backgroundColor: "#6C008B",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  finalizarCompraButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
