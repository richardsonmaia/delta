import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function ModalPagamento({ handleClose }) {
  const [numeroCartao, setNumeroCartao] = useState("Ex = 1111 1111 1111 1111");
  const [validade, setValidade] = useState("Ex = 01/0001");
  const [nomeTitular, setNomeTitular] = useState("Ex = Fernando Fernandes");
  const [codSeguranca, setCodSeguranca] = useState("Ex = 111");

  const handleNumeroCartaoPressIn = () => {
    setNumeroCartao("");
  };

  const handleValidadePressIn = () => {
    setValidade("");
  };

  const handleNomeTitularPressIn = () => {
    setNomeTitular("");
  };

  const handleCodSegurancaPressIn = () => {
    setCodSeguranca("");
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleClose();
        }}
      >
        <Text style={styles.botaoVoltar}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.titulo}>
        <Text style={styles.tituloText}>Pagamento</Text>
      </View>
      <Text style={styles.titulo2}>Número do Cartão:</Text>
      <TextInput
        style={styles.numeroCartao}
        onFocus={handleNumeroCartaoPressIn}
        value={numeroCartao}
        onChangeText={(text) => setNumeroCartao(text)}
      />
      <Text style={styles.titulo2}>Validade:</Text>
      <TextInput
        style={styles.validade}
        onFocus={handleValidadePressIn}
        value={validade}
        onChangeText={(text) => setValidade(text)}
      />
      <Text style={styles.titulo2}>Nome do Titular:</Text>
      <TextInput
        style={styles.titular}
        onFocus={handleNomeTitularPressIn}
        value={nomeTitular}
        onChangeText={(text) => setNomeTitular(text)}
      />
      <Text style={styles.titulo2}>Código de Segurança:</Text>
      <TextInput
        style={styles.codSeguranca}
        onFocus={handleCodSegurancaPressIn}
        value={codSeguranca}
        onChangeText={(text) => setCodSeguranca(text)}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          alert("Pagamento realizado com sucesso \n Parabéns aos envolvidos");
          handleClose();
        }}
      >
        <Text style={styles.botaoText}>Efetuar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botaoVoltar: {
    margin: 10,
  },
  titulo: {
    alignItems: "center",
  },

  tituloText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#6C008B",
    padding: 20,
  },

  numeroCartao: {
    backgroundColor: "#808080",
    color: "#CCCCCC",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontStyle: "italic",
  },

  validade: {
    backgroundColor: "#808080",
    color: "#CCCCCC",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontStyle: "italic",
  },

  titular: {
    backgroundColor: "#808080",
    color: "#CCCCCC",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontStyle: "italic",
  },

  codSeguranca: {
    backgroundColor: "#808080",
    color: "#CCCCCC",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontStyle: "italic",
  },

  botao: {
    backgroundColor: "#6C008B",
    alignItems: "center",
    padding: 20,
    borderRadius: 40,
    marginHorizontal: 50,
    marginTop: 20,
  },

  titulo2: {
    marginLeft: 10,
  },

  botaoText: {
    color: "#FFF",
    fontSize: 20,
  },
});
