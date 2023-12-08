import {
  Platform,
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
import { Picker } from "@react-native-picker/picker";
import { useAltaEmergencia } from "../hooks/useAltaEmergencia";

const AltaEmergencia = ({ route }) => {
  const { paciente } = route.params;
  const {
    guardarEmergencia,
    observaciones,
    setObservaciones,
    setTriaje,
    triaje,
  } = useAltaEmergencia(paciente);

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
            editable={false}
            value={paciente.curp}
          />

          <Text style={styles.label}>Nombre(s)</Text>
          <TextInput
            style={styles.textInput}
            editable={false}
            value={paciente.nombres}
          />
          <Text style={styles.label}>Apellido Paterno</Text>
          <TextInput
            style={styles.textInput}
            editable={false}
            value={paciente.apellidoPaterno}
          />
          <Text style={styles.label}>Apellido Materno</Text>
          <TextInput
            style={styles.textInput}
            editable={false}
            value={paciente.apellidoMaterno}
          />
          <Text style={styles.label}>Nivel de Triaje</Text>
          <Picker
            onValueChange={(item) => setTriaje(item)}
            selectedValue={triaje}
            style={{
              backgroundColor: Colors.card,
              borderRadius: 15,
            }}
          >
            <Picker.Item label="" value="" />
            <Picker.Item
              label="Nivel 1 Reanimación"
              value="1"
              style={{ backgroundColor: "red" }}
              color={Platform.OS === "ios" ? "black" : "white"}
            />
            <Picker.Item
              label="Nivel 2 Emergencia"
              value="2"
              style={{ backgroundColor: "#F08C00" }}
              color={Platform.OS === "ios" ? "black" : "white"}
            />
            <Picker.Item
              label="Nivel 3 Urgencia"
              value="3"
              style={{ backgroundColor: "#F6BD00" }}
              color={Platform.OS === "ios" ? "black" : "white"}
            />
            <Picker.Item
              label="Nivel 4 Prioritario"
              value="4"
              style={{ backgroundColor: "#3CA62E" }}
              color={Platform.OS === "ios" ? "black" : "white"}
            />
            <Picker.Item
              label="Nivel 5 No Urgente"
              value="5"
              style={{ backgroundColor: "#175FA9" }}
              color={Platform.OS === "ios" ? "black" : "white"}
            />
          </Picker>

          <Text style={styles.label}>Observaciones</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            autoCapitalize="none"
            numberOfLines={5}
            value={observaciones}
            onChangeText={setObservaciones}
          />

          <View style={{ flex: 1 }} />

          <View style={styles.footer}>
            <Button
              title="Cancelar"
              color="#D9D9D9"
              onPress={() => navigation.goBack()}
            />
            <Button title="Crear" onPress={guardarEmergencia} />
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
