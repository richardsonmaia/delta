import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import useStorage from "./useStorage";

export function ModalVendas({ produtos, handleClose, itemId }) {
  const selectedItem = produtos.find((item) => item.id === itemId);
  const { saveItem } = useStorage();

  async function salvarItem() {
    await saveItem("@pass", selectedItem.id);
  }

  if (!selectedItem) {
    return (
      <View style={styles.container}>
        <View style={styles.topo}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>
          <Image
            source={require("../../assets/favorito.png")}
            style={styles.imagemFavorito}
          />
        </View>
        <Text>Item não encontrado</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.voltar}>Voltar</Text>
        </TouchableOpacity>
        <Image
          source={require("../../assets/favorito.png")}
          style={styles.imagemFavorito}
        />
      </View>
      <View style={styles.conteudo}>
        <View style={styles.conteudoMeio}>
          <View>
            <Image
              source={require("../../assets/ImagemVinhoGrupaGrande.png")}
              style={styles.imagemFavorito}
            />
          </View>
          <View>
            <Text style={styles.titulo}>{selectedItem.nome}</Text>
            <Text style={styles.secundario}>{selectedItem.descricao}</Text>
          </View>
        </View>
        <View style={styles.textoUltimo}>
          <Text style={styles.textoPrimeiro}>Tipo de Vinho</Text>
          <Text style={styles.textoSegundo}>{selectedItem.tipo}</Text>
        </View>
        <View style={styles.textoUltimo}>
          <Text style={styles.textoPrimeiro}>Volume</Text>
          <Text style={styles.textoSegundo}>{selectedItem.volume}</Text>
        </View>
        <View style={styles.textoUltimo}>
          <Text style={styles.textoPrimeiro}>Região</Text>
          <Text style={styles.textoSegundo}>{selectedItem.regiao}</Text>
        </View>
        <View style={styles.textoUltimo}>
          <Text style={styles.textoPrimeiro}>Teor Alcoólico</Text>
          <Text style={styles.textoSegundo}>{selectedItem.teor}</Text>
        </View>
        <View style={styles.ultimosBotao}>
          <Text style={styles.preco}>R$ {selectedItem.preco}</Text>
          <TouchableOpacity
           style={styles.botao}
           onPress={() => {
            handleClose();
            alert("Adicionado ao carrinho");
            salvarItem();
          }}
        >
          <Text style={styles.botaoText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6C008B",
    height: 800,
  },
  voltar: {
    margin: 20,
    marginTop: 30,
  },
  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagemFavorito: {
    margin: 20,
    marginTop: 30,
  },
  conteudo: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    margin: 15,
    marginTop: 0,
  },
  conteudoMeio: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 25,
    maxWidth: 182,
    margin: 30,
    marginLeft: 0,
  },
  secundario: {
    fontSize: 12,
    maxWidth: 182,
    marginLeft: 0,
    marginTop: 20,
  },
  textoUltimo: {
    flexDirection: "row",
  },
  textoPrimeiro: {
    margin: 20,
    width: 100,
    marginBottom: 0,
  },
  textoSegundo: {
    margin: 20,
    marginLeft: 50,
    marginBottom: 0,
  },
  ultimosBotao: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  botao: {
    backgroundColor: "#6C008B",
    borderRadius: 20,
    color: "#FFF",
    marginRight: 30,
    marginBottom: 20,
  },

  botaoText: {
    color: "#FFF",
    padding: 10,
    fontSize: 15,
  },

  preco: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#6C008B",
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 5,
  },
});
