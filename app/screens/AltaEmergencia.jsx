import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "../Colors";
  import Button from "../components/Button";
  
  const AltaEmergencia = () => {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <ScrollView
            style={{ flex: 1, gap: 20 }}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.label}>CURP</Text>
            <TextInput
              style={styles.textInput}
            />
  
            <Text style={styles.label}>Nombre(s)</Text>
            <TextInput
              style={styles.textInput}
            />
            <Text style={styles.label}>Apellido Paterno</Text>
            <TextInput
              style={styles.textInput}
            />
            <Text style={styles.label}>Apellido Materno</Text>
            <TextInput
              style={styles.textInput}
            />
            <Text style={styles.label}>Nivel de Triaje</Text>
           
  
            <Text style={styles.label}>Observaciones</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              autoCapitalize="none"
              numberOfLines={5}
            />
  
            <View style={{ flex: 1 }} />
  
            <View style={styles.footer}>
              <Button
                title="Cancelar"
                color="#D9D9D9"
              />
              <Button title="Crear"  />
            </View>
            <View />
            <View />
            <View />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default AltaEmergencia;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    body: {
      flex: 1,
      backgroundColor: "#fff",
      marginHorizontal: 15,
      marginVertical: 15,
      paddingHorizontal: 15,
      paddingTop: 15,
      borderRadius: 15,
    },
    label: {
      fontSize: 20,
      color: "#000",
    },
    textInput: {
      fontSize: 18,
      backgroundColor: Colors.card,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 15,
      color: "#000",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 25,
    },
  });
  