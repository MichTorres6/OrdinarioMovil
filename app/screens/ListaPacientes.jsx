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
import React, { useEffect, useState } from "react";
import Colors from "../Colors";
import Store from "../Store";
import { getColorByEstado } from "../helpers";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const ListaPacientes = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [cargando, setCargando] = useState(true);
  const [texto, setTexto] = useState("");
  const [emergencias, setEmergencias] = useState([]);

  useEffect(() => {
    if (!isFocused) return;
    try {
      if (texto === "") {
        setEmergencias(Store.getEmergenciasActivas());
        return;
      }
      setEmergencias(Store.getEmergenciasActivasByNombre(texto));
    } catch (error) {
    } finally {
      setCargando(false);
    }
  }, [isFocused]);

  const buscar = () => {
    setCargando(true);
    try {
      setEmergencias(Store.getEmergenciasActivasByNombre(texto));
    } catch (error) {
    } finally {
      setCargando(false);
    }
  };

  const onPress = (SelectedEmergencia) => {
    navigation.navigate("Paciente", { emergencia: SelectedEmergencia });
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Text style={styles.texto}>Filtrar</Text>
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
                  <Text style={styles.texto}>No hay urgencias</Text>
                </View>
              )}
            </>
          ) : (
            <ScrollView style={{ flex: 1, marginTop: 15 }}>
              {emergencias.map((emergencia) => {
                if (emergencia.status === "Alta") return null;
                return (
                  <TouchableOpacity
                    key={emergencia.paciente.curp}
                    style={styles.card}
                    onPress={() => onPress(emergencia)}
                  >
                    <Text style={styles.cardName}>
                      {emergencia.paciente.nombres}{" "}
                      {emergencia.paciente.apellidoPaterno}{" "}
                      {emergencia.paciente.apellidoMaterno}
                    </Text>
                    <View
                      style={[
                        styles.cardStatus,
                        {
                          backgroundColor: getColorByEstado(emergencia.status),
                        },
                      ]}
                    >
                      <Text style={styles.cardSubtitle}>
                        {emergencia.status}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
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
