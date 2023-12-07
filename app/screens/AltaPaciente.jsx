import {
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "../Colors";
  import Button from "../components/Button";
  
  const AltaPaciente = () => {
    
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.body}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView
              style={{ flex: 1, gap: 20 }}
              contentContainerStyle={{ gap: 10 }}
              showsVerticalScrollIndicator={false}
            >
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
              <Text style={styles.label}>CURP</Text>
              <TextInput
                style={styles.textInput}
                maxLength={18}
              />

              <Text style={styles.label}>Fecha de Nacimiento</Text>
                
              <Text style={styles.label}>Edad</Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
              />
              <Text style={styles.label}>Tipo de Sangre</Text>
  
              <View />
              <View />
  
              <View style={styles.footer}>
                <Button
                  title="Cancelar"
                  color="#D9D9D9"
                />
                <Button title="Crear"  />
              </View>
              <View />
              <View />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default AltaPaciente;

  
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
      // fontWeight: "bold",
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
  