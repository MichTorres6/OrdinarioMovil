import {
  ActivityIndicator,
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
import { useBuscarPaciente } from "../hooks/useBuscarPaciente";

const BuscarPaciente = () => {
  const {
    addEmergencia,
    buscado,
    buscar,
    cargando,
    pacientes,
    setTexto,
    texto,
  } = useBuscarPaciente();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <Text style={styles.texto}>Buscar</Text>
          <TextInput
            style={styles.textInput}
            value={texto}
            onChangeText={setTexto}
            onEndEditing={buscar}
            editable={!cargando}
          />
        </View>
        {cargando ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        ) : pacientes.length === 0 ? (
          <>
            {pacientes.length === 0 && (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.texto}>
                  {buscado ? "No hay pacientes con ese nombre" : "Buscar"}
                </Text>
              </View>
            )}
          </>
        ) : (
          <ScrollView style={{ flex: 1, paddingVertical: 15 }}>
            {pacientes.map((paciente) => {
              return (
                <TouchableOpacity
                  key={paciente.curp}
                  style={styles.card}
                  activeOpacity={0.8}
                  onPress={() => addEmergencia(paciente)}
                >
                  <Text style={styles.cardName}>
                    {paciente.nombres} {paciente.apellidoPaterno}{" "}
                    {paciente.apellidoMaterno}
                  </Text>
                  <Text>{paciente.curp}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
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
  card: {
    width: "100%",
    height: 75,
    backgroundColor: Colors.card,
    marginBottom: 15,
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
