import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

export default function App() {
  const [searchText, setSearchText] = useState("Pesquisar");
  const clearSearchText = () => {
    setSearchText("");
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

  const filters = [
    { id: "1", image: require("../../assets/argentina.png") },
    { id: "2", image: require("../../assets/brasil.png") },
    { id: "3", image: require("../../assets/chile.png") },
    { id: "4", image: require("../../assets/portugal.png") },
  ];

  const wineTypes = [
    {
      id: "1",
      name: "Vinho Argentino",
      filter: "1",
      wines: [
        {
          id: "1",
          image: require("../../assets/ImagemVinhoExpedicion.png"),
          nome: "Paisajes de Los Andes Classic Sauvignon Blanc 2020",
        },

        {
          id: "2",
          image: require("../../assets/ImagemVinhoGrupa.png"),
          nome: "La Grupa Gran Selección Malbec ",
        },

      ],
    },

    {
      id: "2",
      name: "Vinho Brasileiro",
      filter: "2",
      wines: [
        {
          id: "1",
          image: require("../../assets/pergola.png"),
          nome: "Vinho Pergola Tinto Suave Pergola",
        },
      ],
    },
    { id: "3", name: "Vinho Chileno", filter: "3", wines: [] },
    { id: "4", name: "Vinho Português", filter: "4", wines: [] },
  ];

  const filteredWineTypes = wineTypes.find(
    (wineType) => wineType.filter === selectedFilter
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          onPressIn={clearSearchText}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.jpg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.filtersContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            onPress={() => handlePress(filter.id)}
          >
            <View style={[styles.filter, getContainerStyle(filter.id)]}>
              <Image
                source={filter.image}
                style={styles.filterImage}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Adicionando as views para os tipos de vinhos */}
      <View style={styles.wineTypeContainer}>
        {filteredWineTypes &&
          filteredWineTypes.wines.map((wine) => (
            <View
              key={wine.id}
              style={[
                styles.wineType,
                { backgroundColor: selectedFilter === wine.filter ? "#D9D0E3" : "#6C008B" },
              ]}
            >
              <Image source={wine.image} style={styles.wineTypeImage} />
              <Text style={styles.wineTypeText}>{wine.nome}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  logo: {
    width: 190,
    height: 190,
    flexShrink: 0,
    borderRadius: 20,
    backgroundColor: "rgba(225, 121, 255, 0.93)",
  },

  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  filter: {
    width: 73,
    height: 72,
    flexShrink: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D0E3",
  },

  filterImage: {
    width: 50,
    height: 50,
  },

  wineTypeContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 20,
    marginLeft: 20,
  },
  wineType: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 370,
    height: 99,
    marginBottom: 10,
    borderRadius: 20,
  },

  wineTypeImage: {
    width: 19,
    height: 85,
    marginLeft: 30,
  },

  wineTypeDetails: {
    marginLeft: 10, 
  },

  wineTypeText: {
    color: "#fff",
    fontSize: 16,
    paddingLeft: 20,
    marginRight: 30,

  },
});

