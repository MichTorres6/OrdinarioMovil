import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "../Colors";
  
  const ListaPacientes = () => {
    
    return (
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
          <View style={styles.container}>
            <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
              <Text style={styles.texto}>Filtrar</Text>
              <TextInput style={styles.textInput}/>
            </View>
              <ScrollView style={{ flex: 1, marginTop: 15 }}>
                <TouchableOpacity
                    key={"1"}
                    style={styles.card}
                    onPress={() => {}}
                >
                    <Text style={styles.cardName}>
                    {"nombre"}{" "}
                    {"apellidoPaterno"}{" "}
                    {"apellidoMaterno"}
                    </Text>
                </TouchableOpacity>
              </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  };
  
  export default ListaPacientes;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 15,
      borderRadius: 15,
      padding: 15,
    },
    texto: {
      fontSize: 25,
      color: "#fff",
    },
    textInput: {
      flex: 1,
      fontSize: 20,
      padding: 10,
      borderRadius: 15,
      color: "#000",
      backgroundColor: Colors.card,
    },
    card: {
      backgroundColor: Colors.card,
      borderRadius: 15,
      marginBottom: 15,
      padding: 15,
      height: 85,
      justifyContent: "center",
    },
    cardName: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
    },
    cardSubtitle: {
      fontSize: 14,
      color: "#fff",
    },
    cardStatus: {
      width: 150,
      borderRadius: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
  });
  