import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "../Colors";
  
  const BuscarPaciente = () => {
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Text style={styles.texto}>Buscar</Text>
            <TextInput
              style={styles.textInput}
            />
          </View>
          <View
              style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              }}
          >
              <Text style={styles.texto}>
              Buscar
              </Text>
          </View>
        
        </View>
      </SafeAreaView>
    );
  };
  
  export default BuscarPaciente;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 15,
      borderRadius: 15,
      padding: 15,
    },
    texto: {
      fontSize: 25,
      color: "#000",
    },
    textInput: {
      flex: 1,
      fontSize: 20,
      padding: 10,
      borderRadius: 15,
      color: "#000",
      backgroundColor: Colors.card,
    },
  });
  