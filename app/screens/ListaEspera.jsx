import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "../Colors";

  
  const ListaEspera = () => {  
    return (
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                gap: 15,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.texto}>Filtrar</Text>
              <TouchableOpacity
                style={styles.filterBtn}
                onPress={() => {}}
              >
                <Text style={styles.filterBtnText}>
                  0
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, marginTop: 15 }}>
                  <View key={"1"} style={styles.card}>
                    <View
                      style={styles.circle}
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardName}>
                        {"nombres"}{" "}
                        {"apellidoPaterno"}{" "}
                        {"apellidoMaterno"}
                      </Text>
                      <Text style={styles.cardSubtitle}>
                        {"Obdervacion"}...
                      </Text>
                      <View
                        style={{
                          justifyContent: "flex-end",
                          flexDirection: "row",
                          paddingRight: 15,
                        }}
                      >
                        <TouchableOpacity
                          style={styles.cardButton}
                          activeOpacity={0.7}
                          onPress={() => {}}
                        >
                          <Text style={styles.cardButtonText}>Ingresar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
              </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  };
  
  export default ListaEspera;
  
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
    card: {
      backgroundColor: Colors.card,
      borderRadius: 15,
      marginBottom: 15,
      height: 115,
      alignItems: "center",
      flexDirection: "row",
    },
    cardName: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
    },
    cardSubtitle: {
      fontSize: 14,
      color: "#000",
    },
    circle: {
      height: 80,
      width: 80,
      borderRadius: 40,
      transform: [{ scaleX: 1.4 }, { translateX: -25 }],
    },
    cardButton: {
      backgroundColor: "#D9D9D9",
      borderRadius: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: "center",
      width: 100,
      marginTop: 15,
    },
    cardButtonText: {
      color: "#000",
      fontSize: 16,
    },
  });
  