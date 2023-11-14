import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  const [texto, setTexto] = useState("Pesquisar");
  const limparTexto = () => {
    setTexto("");
  };

  const data = [
    {
      id: "1",
      image: require("../../assets/ImagemVinhoPorteno.png"),
      nome: "Porteño Cabernet" + "\n" + "Saivignon",
      preco: "R$39.90",
    },
    {
      id: "2",
      image: require("../../assets/ImagemVinhoExpedicion.png"),
      nome: "Expedicion Single Vineyard Selection Cabernet Sauvignon",
      preco: "R$34.99",
    },
    {
      id: "3",
      image: require("../../assets/ImagemVinhoVelvet.png"),
      nome: "Velvet Collection Single Vineyard Malbec 2022",
      preco: "R$35.99",
    },
    {
      id: "4",
      image: require("../../assets/ImagemVinhoVina.png"),
      nome: "Viña de Los Andes Red Blend",
      preco: "R$19.99",
    },
  ];

  const dataArg = [
    {
      id: "4",
      image: require("../../assets/ImagemVinhoVina.png"),
      nome: "Viña de Los Andes Red Blend",
      preco: "R$19.99",
    },
    {
      id: "5",
      image: require("../../assets/ImagemVinhoPoderosa.png"),
      nome: "La Poderosa Cab. Franc Merlot 2021",
      preco: "R$34.99",
    },
    {
      id: "6",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Velvet Collection Single Vineyard Malbec 2022",
      preco: "R$35.99",
    },
    {
      id: "4",
      image: require("../../assets/ImagemVinhoVina.png"),
      nome: "Viña de Los Andes Red Blend",
      preco: "R$19.99",
    },
  ];

  const dataChi = [
    {
      id: "4",
      image: require("../../assets/ImagemVinhoVina.png"),
      nome: "Viña de Los Andes Red Blend",
      preco: "R$19.99",
    },
    {
      id: "5",
      image: require("../../assets/ImagemVinhoPoderosa.png"),
      nome: "La Poderosa Cab. Franc Merlot 2021",
      preco: "R$34.99",
    },
    {
      id: "6",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Velvet Collection Single Vineyard Malbec 2022",
      preco: "R$35.99",
    },
    {
      id: "4",
      image: require("../../assets/ImagemVinhoVina.png"),
      nome: "Viña de Los Andes Red Blend",
      preco: "R$19.99",
    },
  ];
  const ListaProdutos = () => {};
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.image}>
        <Image source={item.image} style={styles.imagemProduto} />
      </View>
      <View style={styles.conteudoItem}>
        <Text style={styles.textoItem}>{item.nome}</Text>
        <Text style={styles.textoPreco}>{item.preco}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setTexto(texto)}
            value={texto}
            onPressIn={limparTexto}
          />
        </View>
        <View>
          <Text style={styles.textTitulo}>Mais Vendidos</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View>
          <Text style={styles.textTitulo}>Argentina</Text>
        </View>
        <FlatList
          data={dataArg}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View>
          <Text style={styles.textTitulo}>Chile</Text>
        </View>
        <FlatList
          style={styles.FlatList}
          data={dataChi}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  input: {
    backgroundColor: "#6C008B",
    borderRadius: 40,
    width: 343,
    height: 50,
    color: "#FFF",
    fontStyle: "italic",
    paddingLeft: 20,
    fontSize: 16,
  },

  inputContainer: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center",
  },

  textTitulo: {
    fontSize: 24,
    paddingTop: 20,
    paddingLeft: 10,
  },

  item: {
    backgroundColor: "#F6f6f6",
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 10,
    height: 177,
    width: 110,
    alignItems: "center",
    marginTop: 20,
  },
  textoItem: {
    fontSize: 10,
    maxWidth: 110,
    textAlign: "left",
  },
  textoPreco: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
  },
  imagemProduto: {
    margin: 10,
  },
  FlatList: {
    marginBottom: 100,
  },
});
