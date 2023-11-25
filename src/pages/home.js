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
  Modal,
  TouchableOpacity,
} from "react-native";
import { ModalVendas } from "./modalVendas";

export default function App() {
  const [texto, setTexto] = useState("Pesquisar");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItemId, setModalItemId] = useState(null);
  function abrirVenda(itemId) {
    setModalVisible(true);
    setModalItemId(itemId);
  }

  const data = [
    {
      id: "1",
      image: require("../../assets/ImagemVinhoPorteno.png"),
      nome: "Paisajes de Los Andes Classic Sauvignon Blanc 2020",
      preco: "R$57,78",
      descricao:
        "Branco leve, seco, fresco, com aromas de maracujá verde e grama cortada.As uvas de cada vinhedo são colhidas e vinificadas separadamente, o blend de terrois é feito após a vinificação de cada lote.A fermentação é em inox, com controle de temperatura, filtrado e estabilizado.",
      tipo: "Branco",
      volume: "750ml",
      regiao: "Argentina, Valle Central",
      teor: "13%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },
    {
      id: "2",
      image: require("../../assets/ImagemVinhoExpedicion.png"),
      nome: "Royal Road Malbec 2019",
      preco: "R$60,00",
      descricao:
        "Royal Road é um projeto com a assinatura de El Japo, Enólogo Jovem do Ano 2019.Os vinhedos são plantados em solo aluvial argiloso com 30 anos, irrigados por gotejamento.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Argentina, Maipu",
      teor: "14%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },
    {
      id: "3",
      image: require("../../assets/ImagemVinhoVelvet.png"),
      nome: "Gauchezco Estate Torrontes 2019",
      preco: "R$69,61",
      descricao:
        "Este Torrontés é proveniente dos vinhedos cultivados em Salta à 1700 metros de altitude.Os Torrontés de Salta são os mais prestigiados da Argentina devido ao maior equilíbrio entre acidez e álcool que as altitudes da região proporcionam.",
      tipo: "Branco",
      volume: "750ml",
      regiao: "Argentina, Cafayate",
      teor: "15%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },
    {
      id: "4",
      image: require("../../assets/ImagemVinhoVina.png"),
      nome: "Gran Enemigo Single Vineyard Gualtallary 2019",
      preco: "R$878,85",
      descricao:
        "Gran Enemigo Gualtallary Single Vineyard, que mereceu os máximos 100 pontos dos dois críticos! É a primeira vez na história que um vinho da América do Sul recebe os 100 pontos dos dois especialistas. Para Parker, a safra 2019 do Gran Enemigo lembra uma grande safra do seu vinho de Bordeaux favorito: o Château Lafleur de Pomerol.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Argentina/Mendoza",
      teor: "13,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "5",
      image: require("../../assets/ImagemVinhoPoderosa.png"),
      nome: "Vertebrado Cabernet Franc 2019",
      preco: "R$304,57",
      descricao:
        "Vertebrado fala mais sobre o solo das altitudes de Gualtallary: calcáreo branco, giz e muita pedra.Terrenos NÚS, quase sem matéria orgânica onde o esqueleto do solo fica amostra.O resultado é um vinho com acidez elevada, taninos firmes, e mostra o caráter mineral da região.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Argentina/Mendoza",
      teor: "13%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "6",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Gauchezco Estate Malbec/Pinot/Monastrell 2020",
      preco: "R$108,03",
      descricao:
        "Rosé de Malbec com Mourvedre, blend de uvas que nos entrega além das frutas negras da Malbec, as especiarias da Mourvedre.Elaborado por prensa direta, ficando somente 4 horas em contato com as cascas para obter essa coloração provençal.",
      tipo: "Rosé",
      volume: "750ml",
      regiao: "Argentina/Maipú",
      teor: "14,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "7",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Electrico Malbec 2020",
      preco: "R$204,25",
      descricao:
        "A eletricidade da fruta de Gualtallary é única e representada por esse Malbec intenso e aromático sem passagem por madeira.Electrico reflete o fruto puro e profundo de Gualtallary, um vinho radiante com notas minerais, selvagens e de montanha.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Argentina, Mendoza",
      teor: "14,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "8",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "DV Catena Tinto Histórico 2020",
      preco: "R$ 237,12",
      descricao:
        "O DV Catena Tinto Histórico é elaborado com o mesmo corte do DV Catena Bicentenário, a edição comemorativa lançada para celebrar em 2022 os 200 anos da independência do Brasil. Trata-se de um delicioso blend de Malbec com uma parcela de Bonarda e um toque de Petit Verdot.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Argentina, Mendoza",
      teor: "13,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },
    // Fim dos Vinhos Argentinos :)
    {
      id: "9",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Massal 1945 Carménère 2018",
      preco: "R$239,41",
      descricao:
        "Um dos melhores Carménère do Chile, não é só um Carménère, é um vinho de TERROIR que mostra a importância dos antigos vinhedos de Almahue.Em toda linha Massal 1945 a busca é pela elegância, equilíbrio e potencial de envelhecimento.",
      tipo: "Tinto, Orgânicos e Naturais",
      volume: "750ml",
      regiao: "Chile / Valle de Cachapoal ",
      teor: "13,9%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "10",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Azuda Syrah Block8",
      preco: "R$128,90",
      descricao:
        "A filosofia dos vinhos Azuda é trazer alta qualidade em variedades de uvas não tradicionais do Vale de Almahue (Garnacha e Syrah). Através destas variedades, Azuda desafia tradições com alma, elegância e frescor.O respeito a essência dos vinhos é evidente tendo em vista que os processos de vinificação são naturais e com a mínima intervenção.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Chile, Valle de Cachapoal",
      teor: "14,2%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "11",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Montes Alpha Carménère 2019",
      preco: "R$103,69",
      descricao:
        "O Montes Alpha Carménère é produzido com a casta mais emblemática do Chile. Concentrado e exuberante, como os demais vinhos da linha Montes Alpha, mostra camadas de frutas maduras e especiarias, sem com caráter excessivamente vegetal de alguns Carménère.",
      tipo: "Tinto Seco",
      volume: "750ml",
      regiao: "Chile / Vale do Colchagua",
      teor: "14,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "12",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Carmen Premier 1850 Reserva Pinot Noir 2021",
      preco: "R$126,58",
      descricao:
        "Um dos maiores achados entre os vinhos chilenos elaborados com a casta Pinot Noir, o Carmen Premier 1850 é produzido com uvas de um vinhedo na fria região de Leyda, próximo ao oceano Pacífico. As uvas são colhidas a mão e cuidadosamente selecionadas.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Chile / Valle de Leyda",
      teor: "12,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "13",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Lapostolle Apalta 2021",
      preco: "R$220,54",
      descricao:
        "Um tinto muito elegante, profundo e complexo, elaborado com as uvas Syrah, Carménère Merlot e Cabernet Sauvignon, todas de cultivo biodinâmico e baixos rendimentos. O vinho reúne o toque de especiarias da Carménère, a maciez da Merlot, a estrutura da Cabernet Sauvignon e a complexidade aromática da Syrah.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Chile / Vale de Apalta",
      teor: "14,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "14",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Carmen Gran Reserva Carménère 2018",
      preco: "R$220,54",
      descricao:
        "Viña Carmen decidiu reduzir drasticamente os rendimentos dos vinhedos, além de colher as uvas perfeitamente maduras, trocando as análises de laboratório pela velha prova do gosto da uva para linha Gran Reserva e os resultados foram surpreendentes.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Chile",
      teor: "14%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "15",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Carmen Insigne Aperitif Cabernet Sauvignon Rosé 2021",
      preco: "R$82,36",
      descricao:
        "Inspirado nos rosados da Provence, o Aperitif é fresco, leve e delicado. Versátil, é uma ótima pedida para ser servido na piscina, podendo também acompanhar uma infinidade de pratos como saladas, peixes, salmão, camarão, embutidos e entradas. Um rosé para ter sempre na geladeira!",
      tipo: "Rosé",
      volume: "750ml",
      regiao: "Chile / Valle Central",
      teor: "12,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "16",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Lapostolle Grand Selection Cabernet Sauvignon 2021",
      preco: "R$ 187,38",
      descricao:
        "O Lapostolle Grand Selection é uma das melhores compras entre todos os Cabernet Sauvignon elaborados no Chile. Descrito por James Suckling, que concedeu 92 pontos para as últimas 5 safras avaliadas, como um vinho “suculento e exuberante no palato”, mostrando “cativantes aromas de frutas vermelhas maduras” e sofisticadas notas de especiarias.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Chile / Valle de Colchagua",
      teor: "14%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },
    // Fim dos Vinhos Chilenos :/
    {
      id: "17",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Graham's 10 Years Old Tawny",
      preco: "R$368,89",
      descricao:
        "Simplesmente o melhor Porto 10 anos para a revista Decanter! O Graham's 10 Years Old é um Tawny elaborado com uma impressionante seleção de vinhos reserva, envelhecidos 10 anos em média. O enólogo de Graham's combina vinhos bastante antigos com outros mais jovens, originando um Tawny complexo e elegante, com o exuberante frutado que é a marca registrada de Graham's. ",
      tipo: "Porto",
      volume: "750ml",
      regiao: "Portugal / Porto",
      teor: "20%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "18",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Quinta da Lagoalva Castelão/Touriga Nacional 2020",
      preco: "R$107,43",
      descricao:
        "Sedutor e saboroso, este corte de Castelão e Touriga Nacional é elaborado pela Quinta da Lagoalva, um dos grandes nomes do Tejo. Excelente relação qualidade/preço!",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Portugal / Tejo",
      teor: "13,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "19",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Post-Scriptum 2020",
      preco: "R$436,11",
      descricao:
        "Nos mesmos moldes dos deuxièmes vins dos châteaux de Bordeaux, o Post Scriptum é o super-segundo vinho do grandioso Chryseia, em um estilo robusto, elegante e concentrado. Trata-se de um grande vinho, que compete em qualidade com os principais vinhos da maioria dos produtores do Douro.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Portugal / Douro",
      teor: "14,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "20",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Quinta do Vale Meão Douro DOC 2019",
      preco: "R$1.657,65",
      descricao:
        "Melhor tinto de Portugal na safra 2016 para a Wine Spectator, o Quinta do Vale Meão é um verdadeiro ícone entre os tintos do Douro. É talhado com uvas da histórica Quinta do Vale Meão, que Fernando Nicolau de Almeida, o mais célebre enólogo português de todos os tempos, apontou como o melhor terroir de Portugal para a produção de vinhos tintos ainda nos anos 1950.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Portugal / Douro",
      teor: "14%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "21",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Invincible Number One DOC Douro tinto 2020",
      preco: "R$203,96",
      descricao:
        "O vinho Invincible Number One tinto da jovem e talentosa enóloga Rita Marques em parceria com Marc Kent é uma mistura de vinhas com mais de 30 anos. Elaborado a partir das principais castas da região do Douro: Touriga Nacional, Touriga Franca e Tinta Roriz, uma parte deste blend é fermentado em lagar e o restante em tanques de aço inoxidável.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Portugal / Douro",
      teor: "14%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "22",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Quinta do Monte d'Oiro Rosé 2019",
      preco: "R$113,18",
      descricao:
        "Este delicioso rosé elaborado com a uva Syrah é uma das mais saborosas surpresas da região de Lisboa. Fresco e aromático, combina um atraente aroma de frutas vermelhas com um ótimo frescor. Uma grande pedida do maior especialista de Portugal na casta Syrah.",
      tipo: "Rosé",
      volume: "750ml",
      regiao: "Portugal / Lisboa",
      teor: "12%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "23",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Monarkia das Marias tinto 2017",
      preco: "R$66,00",
      descricao:
        "Monarkia das Marias Tinto possui uma brilhante cor granada, aroma intenso de frutas vermelhas (morango e cereja), mas também notas de amora, ameixa preta e especiarias. Na boca é denso e equilibrado, com boa estrutura, taninos bem definidos mas sem perder elegância.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Portugal / Monte d'Oiro",
      teor: "13,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "24",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Monte da Casta 2020",
      preco: "R$96,65",
      descricao:
        "Monte da Casta é um dos grandes achados do Tejo, de fantástica relação qualidade/preço. É um tinto saboroso, com ótima fruta. Na boca mostra boa estrutura e muito equilíbrio. Ótimo para o dia a dia.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Portugal / Tejo",
      teor: "13,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },
    //Fim dos vinhos portugueses :D
    {
      id: "25",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "L.A Jovem Brut 80% Chardonnay, 20 % Riesling",
      preco: "R$64,09",
      descricao:
        "Colheita manual das uvas\nRefrigeração das uvas em câmara fria por 24 horas\nSeleção dos cachos, desengace e seleção das bagas\nVinificação por gravidade\nPrensagem\nLimpeza estática do mosto a frio\nAdição de leveduras selecionadas\nTemperatura de fermentação controlada em 13ºC\nClarificação e filtração do vinho base\nEstabilização tartárica a frio",
      tipo: "Branco",
      volume: "750ml",
      regiao: "Brasil / Rio Grande do Sul",
      teor: "12,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "26",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Vallontano Indra 2018",
      preco: "R$112,90",
      descricao:
        "Elaborado com as uvas Cabernet Sauvignon e Merlot cortadas com 20% de Marselan, é um delicioso tinto sem passagem por madeira, que mostra muito bem o terroir do Vale dos Vinhedos. Trata-se de um vinho de bom corpo e aromas expressivos, com os taninos e frescor característicos do Vale dos Vinhedos.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Brasil / Vale dos Vinhedos",
      teor: "13%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "27",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Vallontano Reserva Cabernet Sauvignon 2018",
      preco: "R$119,90",
      descricao:
        "Elaborado somente nas safras excepcionais, o Vallontano Reserva Cabernet Sauvignon é um dos melhores e mais autênticos exemplos desta casta elaborados no Brasil, combinando aromas generosos de fruta madura e madeira bem integrada com elegância e tipicidade.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Brasil / Vale dos Vinhedos",
      teor: "13,3%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "28",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Vallontano LH Zanini Tinto 2018",
      preco: "R$219,90",
      descricao:
        "Resultado do corte de uvas passificadas Ancellotta, Tannat, Teroldego e outras castas em menor proporção, o LH Zanini é um vinho artístico, artesanal e que traduz a manifestação típica das variedades utilizadas.",
      tipo: "Tinto",
      volume: "750ml",
      regiao: "Brasil / Vale dos Vinhedos",
      teor: "13,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "29",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Vallontano Chardonnay 2023",
      preco: "R$129,90",
      descricao:
        "A Vallontano elabora esse surpreendente Chardonnay saboroso, aromático e fresco, com ótima presença no palato. O estilo marcante, mas limpo e sem madeira, é o mesmo que vem fazendo cada vez mais sucesso entre vários bons produtores de Chardonnay de todo o mundo.",
      tipo: "Branco",
      volume: "750ml",
      regiao: "Brasil / Vale dos Vinhedos",
      teor: "13,5%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "30",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Vallontano Tempranillo Rosé 2021",
      preco: "R$119,90",
      descricao:
        "O Tempranillo Rosé da Vallontano é um vinho de bastante personalidade e de estilo único. É deliciosamente fresco e com um final de boca seco. Elaborado com uvas cuidadosamente cultivadas nos vinhedos situados nos Caminhos de Pedra, Serra Gaúcha.",
      tipo: "Rosé",
      volume: "750ml",
      regiao: "Brasil / Vale dos Vinhedos",
      teor: "12%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "31",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Vinho Tinto Petit Verdot Buffon",
      preco: "R$99,90",
      descricao:
        "O Buffon Petit Verdot é um vinho de coloração vermelha com reflexos violáceos, aromas de frutas vermelhas com notas de especiarias, frutas do bosque e um toque de café e chocolate.Em boca apresenta corpo intenso, taninos maduros e uma persistência interessante.",
      tipo: "Tinto Seco",
      volume: "750ml",
      regiao: "Brasil / Bento Gonçalves",
      teor: "12%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
    },

    {
      id: "32",
      image: require("../../assets/ImagemVinhoGrupa.png"),
      nome: "Vinho Fino Tinto Seco Malbec Ádige Cappelletti",
      preco: "R$49,90",
      descricao:
        "Descubra a especialidade inigualável do Vinho Tinto Bordô Suave Cappelletti. Uma jornada sensorial que combina a intensidade do vinho tinto com uma delicadeza cativante. Ideal para celebrações e momentos especiais. Adquira agora e mergulhe na excelência deste vinho.",
      tipo: "Tinto Suave",
      volume: "750ml",
      regiao: "Brasil / Vale Terentino",
      teor: "10,8%",
      imageGrande: require("../../assets/ImagemVinhoGrupa.png"),
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
      nome: "La Grupa Gran Selección Malbec",
      preco: "R$35.99",
    },
    {
      id: "7",
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
      nome: "La Grupa Gran Selección Malbec",
      preco: "R$35.99",
    },
    {
      id: "7",
      image: require("../../assets/ImagemVinhoVina.png"),
      nome: "Viña de Los Andes Red Blend",
      preco: "R$19.99",
    },
  ];
  const ListaProdutos = () => {};
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => abrirVenda(item.id)}>
      <View style={styles.image}>
        <Image source={item.image} style={styles.imagemProduto} />
      </View>
      <View style={styles.conteudoItem}>
        <Text style={styles.textoItem}>{item.nome}</Text>
        <Text style={styles.textoPreco}>{item.preco}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setTexto(texto)}
            value={texto}
            onPressIn={() => setTexto("")}
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
        <Modal visible={modalVisible} animationType="slide">
          <ModalVendas
            produtos={data}
            handleClose={() => {
              setModalVisible(false);
              setModalItemId(null);
            }}
            itemId={modalItemId} // Passar o itemId para a modal
          />
        </Modal>
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
