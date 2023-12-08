import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Colors from "../Colors";
import Store from "../Store";
import { convertirFecha, getColorByEstado } from "../helpers";
import Button from "../components/Button";

const Paciente = ({ route }) => {
  const [actualizacion, setActualizacion] = useState("");
  const [emergencia, setEmergencia] = useState(route.params.emergencia);
  const [modalVisible, setModalVisible] = useState(false);

  const addObservacion = () => {
    if (actualizacion === "")
      return Alert.alert("La actualización no puede estar vacía");

    if (actualizacion.length < 50)
      return Alert.alert("La actualización debe tener al menos 50 caracteres");

    Store.addObservacion(emergencia.paciente.curp, {
      fecha: new Date().toISOString(),
      texto: actualizacion,
    });

    setActualizacion("");
    Alert.alert("Actualización agregada");

    setEmergencia(Store.getEmergenciaByCurp(emergencia.paciente.curp));
  };

  const onUpdateStatus = (status) => {
    Store.updateEmergenciaStatus(emergencia.paciente.curp, status);
    setEmergencia(Store.getEmergenciaByCurp(emergencia.paciente.curp));
    setModalVisible(false);
  };

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
                {emergencia.paciente.nombres}{" "}
                {emergencia.paciente.apellidoPaterno}{" "}
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={[
                  styles.cardStatus,
                  { backgroundColor: getColorByEstado(emergencia.status) },
                ]}
              >
                <Text numberOfLines={1} style={styles.cardSubtitle}>
                  {emergencia.status}
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ flex: 1, marginTop: 15 }}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.subtitle}>Observaciones</Text>

              {emergencia.Observaciones.map((observacion, index) => {
                return (
                  <View
                    key={index}
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
                      {convertirFecha(observacion.fecha)}
                    </Text>
                    <Text style={styles.texto}>{observacion.texto}</Text>
                  </View>
                );
              })}
            </ScrollView>

            <View style={{ gap: 10, paddingTop: 5 }}>
              <Text style={styles.subtitle}>Actualización</Text>
              <TextInput
                style={styles.textInput}
                value={actualizacion}
                onChangeText={setActualizacion}
                numberOfLines={3}
                multiline
              />
              <Button title="Añadir" onPress={addObservacion} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <Modal visible={modalVisible} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffffff90",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 20,
              paddingVertical: 30,
              width: "80%",
              gap: 15,
              borderRadius: 15,
            }}
          >
            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: getColorByEstado("Validacion") },
              ]}
              onPress={() => onUpdateStatus("Validacion")}
            >
              <Text style={styles.modalButtonText}>Validación</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: getColorByEstado("Consulta") },
              ]}
              onPress={() => onUpdateStatus("Consulta")}
            >
              <Text style={styles.modalButtonText}>Consulta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: getColorByEstado("Hospitalizacion") },
              ]}
              onPress={() => onUpdateStatus("Hospitalizacion")}
            >
              <Text style={styles.modalButtonText}>Hospitalización</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: getColorByEstado("Alta") },
              ]}
              onPress={() => onUpdateStatus("Alta")}
            >
              <Text style={styles.modalButtonText}>Alta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonText: {
    fontSize: 20,
    color: "#fff",
  },
});
