import {
  ActivityIndicator,
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../Colors";
import Store from "../Store";
import { getColorByNivel, getTitleByNivel } from "../helpers";

const ListaEspera = () => {
  const [cargando, setCargando] = useState(true);
  const [nivel, setNivel] = useState("0");
  const [modalVisible, setModalVisible] = useState(false);
  const [emergencias, setEmergencias] = useState([]);

  const loadListaDeEspera = () => {
    try {
      setCargando(true);
      setEmergencias(Store.getListaDeEspera());
    } catch (error) {
    } finally {
      setCargando(false);
    }
  };
  useEffect(() => {
    loadListaDeEspera();
  }, []);

  const filter = (val) => {
    setNivel(val);
    if (val === "0") {
      setEmergencias(Store.getListaDeEspera());
      setModalVisible(false);

      return;
    }
    setEmergencias(Store.getListaDeEsperaByNivel(val));
    setModalVisible(false);
  };

  const onPress = (SelectedEmergencia) => {
    let higher = 6;
    emergencias.map((emergencia) => {
      if (+emergencia.nivel < higher) {
        higher = +emergencia.nivel;
      }
    });

    if (+SelectedEmergencia.nivel > higher) {
      return Alert.alert("Aun existe un paciente con mayor prioridad");
    }
    Store.ingresarEmergencia(SelectedEmergencia.paciente.curp);

    Alert.alert("Paciente ingresado");

    loadListaDeEspera();
  };

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
              style={[
                styles.filterBtn,
                { backgroundColor: getColorByNivel(nivel) },
              ]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.filterBtnText}>
                {nivel === "0"
                  ? "                   "
                  : `Nivel ${nivel} ${getTitleByNivel(nivel)}`}
              </Text>
            </TouchableOpacity>
          </View>
          {cargando ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="large" color={Colors.primary} />
            </View>
          ) : emergencias.length === 0 ? (
            <>
              {emergencias.length === 0 && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.texto}>No hay pacientes en espera</Text>
                </View>
              )}
            </>
          ) : (
            <ScrollView style={{ flex: 1, marginTop: 15 }}>
              {emergencias.map((emergencia) => {
                return (
                  <View key={emergencia.paciente.curp} style={styles.card}>
                    <View
                      style={[
                        styles.circle,
                        {
                          backgroundColor: getColorByNivel(emergencia.nivel),
                        },
                      ]}
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardName}>
                        {emergencia.paciente.nombres}{" "}
                        {emergencia.paciente.apellidoPaterno}{" "}
                        {emergencia.paciente.apellidoMaterno}
                      </Text>
                      <Text style={styles.cardSubtitle}>
                        {emergencia.Observaciones[0].texto.substring(0, 30)}...
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
                          onPress={() => onPress(emergencia)}
                        >
                          <Text style={styles.cardButtonText}>Ingresar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </View>
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
                { backgroundColor: getColorByNivel("2") },
              ]}
              onPress={() => filter("2")}
            >
              <Text style={styles.modalButtonText}>Nivel 2 Emergencia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: getColorByNivel("3") },
              ]}
              onPress={() => filter("3")}
            >
              <Text style={styles.modalButtonText}>Nivel 3 Urgencia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: getColorByNivel("4") },
              ]}
              onPress={() => filter("4")}
            >
              <Text style={styles.modalButtonText}>Nivel 4 Prioritario</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: getColorByNivel("5") },
              ]}
              onPress={() => filter("5")}
            >
              <Text style={styles.modalButtonText}>Nivel 5 No urgente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "pink" }]}
              onPress={() => filter("0")}
            >
              <Text style={styles.modalButtonText}>Todos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  filterBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  filterBtnText: {
    fontSize: 20,
    color: "#fff",
  },
});
