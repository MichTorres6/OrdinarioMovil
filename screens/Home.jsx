import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "../Colors";
  
  const pantallas = [
    {
      id: 0,
      icono: "",
      ruta: "",
      titulo: "Alta paciente",
    },
    {
      id: 1,
      icono: "",
      ruta: "",
      titulo: "Alta emergencia",
    },
    {
      id: 2,
      icono: "",
      ruta: "",
      titulo: "Lista de espera",
    },
    {
      id: 3,
      icono: "",
      ruta: "",
      titulo: "Lista pacientes",
    },
    {
      id: 4,
      icono: "",
      ruta: "",
      titulo: "Info",
    },
  ];
  
  const Home = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
        <View style={styles.container}>
          {pantallas.map((pantalla) => {
            return (
              <TouchableOpacity
                style={styles.card}
                key={pantalla.id}
                activeOpacity={0.8}
              >
                <Text>{pantalla.titulo}</Text>
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
      paddingVertical: 20,
      gap: 20,
    },
    card: {
      flex: 1,
      backgroundColor: Colors.card,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });