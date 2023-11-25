import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("Pesquisar");
  const limparTexto = () => {
    setTexto("");
  };

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handlePress = (filtro) => {
    setSelectedFilter(filtro);
  };

  const getContainerStyle = (filtro) => {
    return {
      backgroundColor: selectedFilter === filtro ? "#6C008B" : "#D9D0E3",
    };
  };

  const getTextColor = (filtro) => {
    return {
      color: selectedFilter === filtro ? "#FFF" : "#000",
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setTexto(texto)}
          value={texto}
          onPressIn={limparTexto}
        />
      </View>
      <View style={styles.filtro}>
        <TouchableOpacity onPress={() => handlePress("Argentina")}>
          <View style={[styles.filtroTexto, getContainerStyle("Argentina")]}>
            <Text style={getTextColor("Argentina")}>Argentina</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Brasil")}>
          <View style={[styles.filtroTexto, getContainerStyle("Brasil")]}>
            <Text style={getTextColor("Brasil")}>Brasil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Chile")}>
          <View style={[styles.filtroTexto, getContainerStyle("Chile")]}>
            <Text style={getTextColor("Chile")}>Chile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Uruguai")}>
          <View style={[styles.filtroTexto, getContainerStyle("Uruguai")]}>
            <Text style={getTextColor("Uruguai")}>Uruguai</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.categorias}>
        <View style={styles.lacunasCategorias}>
          <Image
            source={require("../../assets/ImagemCarnes.png")}
            style={styles.imagemCategorias}
          />
          <Text style={styles.textoPrin}>Carnes</Text>
          <Text style={styles.textoSecun}>(2)</Text>
        </View>

        <View style={styles.lacunasCategorias}>
          <Image
            source={require("../../assets/ImagemMassas.png")}
            style={styles.imagemCategorias}
          />
          <Text style={styles.textoPrin}>Massas</Text>
          <Text style={styles.textoSecun}>(1)</Text>
        </View>
      </View>

      <View style={styles.categorias}>
        <View style={styles.lacunasCategorias}>
          <Image
            source={require("../../assets/ImagemFrios.png")}
            style={styles.imagemCategorias}
          />
          <Text style={styles.textoPrin}>Frios</Text>
          <Text style={styles.textoSecun}>(2)</Text>
        </View>

        <View style={styles.lacunasCategorias}>
          <Image
            source={require("../../assets/ImagemPeixes.png")}
            style={styles.imagemCategorias}
          />
          <Text style={styles.textoPrin}>Peixes</Text>
          <Text style={styles.textoSecun}>(1)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  inputContainer: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center",
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

  filtro: {
    flexDirection: "row",
    justifyContent: "center",
  },

  filtroTexto: {
    borderRadius: 20,
    padding: 8,
    margin: 10,
    fontSize: 14,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 50,
  },

  categorias: {
    flexDirection: "row",
  },

  textoPrin: {
    fontSize: 18,
    color: "#2D0C57",
    fontWeight: "bold",
    paddingLeft: 14,
    paddingTop: 5,
  },

  textoSecun: {
    color: "#9586A8",
    fontSize: 12,
    paddingLeft: 14,
    paddingTop: 1,
    paddingBottom: 5,
  },

  lacunasCategorias: {
    borderWidth: 1,
    borderColor: "#D9D0E3",
    margin: 10,
    borderRadius: 8,
  },
});
