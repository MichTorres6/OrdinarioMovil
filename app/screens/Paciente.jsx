import {
    KeyboardAvoidingView,
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
  import Button from "../components/Button";
  
  const Paciente = () => {
  
    return (
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.name}>
                  {"nombres"}{" "}
                  {"apellidoPaterno"}{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.cardStatus}
                >
                  <Text numberOfLines={1} style={styles.cardSubtitle}>
                    "Estado"
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                style={{ flex: 1, marginTop: 15 }}
                showsVerticalScrollIndicator={false}
              >
                <Text style={styles.subtitle}>Observaciones</Text>
                <View
                  key={"1"}
                  style={{
                    backgroundColor: Colors.card,
                    borderRadius: 15,
                    padding: 15,
                    marginVertical: 10,
                    gap: 3,
                  }}
                >
                  <Text
                    style={[
                      styles.texto,
                      { textAlign: "right", fontSize: 15 },
                    ]}
                  >
                    Fecha
                  </Text>
                  <Text style={styles.texto}>{"Lorem Ipsum"}</Text>
                </View>
              </ScrollView>
  
              <View style={{ gap: 10, paddingTop: 5 }}>
                <Text style={styles.subtitle}>Actualización</Text>
                <TextInput
                  style={styles.textInput}
                  numberOfLines={3}
                  multiline
                />
                <Button title="Añadir"  />
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  };
  
  export default Paciente;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 15,
      borderRadius: 15,
      padding: 15,
    },
    name: {
      fontSize: 22,
      color: "#000",
      fontWeight: "500",
    },
    subtitle: {
      fontSize: 20,
      color: "#000",
    },
    texto: {
      fontSize: 18,
      color: "#000",
    },
    cardStatus: {
      width: 135,
      borderRadius: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    cardSubtitle: {
      fontSize: 14,
      color: "#fff",
    },
    textInput: {
      fontSize: 20,
      padding: 10,
      borderRadius: 15,
      color: "#000",
      backgroundColor: Colors.card,
    },
  });
  