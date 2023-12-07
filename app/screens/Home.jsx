import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../Colors";
import { useNavigation } from "@react-navigation/native";

const pantallas = [
  {
    id: 0,
    icono: require("../../assets/alta-paciente.png"),
    ruta: "AltaPaciente",
    titulo: "Alta paciente",
  },
  {
    id: 1,
    icono: require("../../assets/alta-emergencia.png"),
    ruta: "BuscarPaciente",
    titulo: "Alta emergencia",
  },
  {
    id: 2,
    icono: require("../../assets/lista-espera.png"),
    ruta: "ListaEspera",
    titulo: "Lista de espera",
  },
  {
    id: 3,
    icono: require("../../assets/lista-pacientes.png"),
    ruta: "ListaPacientes",
    titulo: "Lista pacientes",
  },
  {
    id: 4,
    icono: require("../../assets/informacion.png"),
    ruta: "Informacion",
    titulo: "Info",
  },
];

const Home = () => {
  const navigation = useNavigation();

  const onPress = (ruta) => {
    navigation.navigate(ruta);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <View style={styles.container}>
        {pantallas.map((pantalla) => {
          return (
            <TouchableOpacity
              style={styles.card}
              key={pantalla.id}
              activeOpacity={0.8}
              onPress={() => onPress(pantalla.ruta)}
            >
              <Image
                source={pantalla.icono}
                style={{ width: 150, height: "100%" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 45,
    gap: 20,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
