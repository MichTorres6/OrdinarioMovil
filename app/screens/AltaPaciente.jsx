import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import Store from "../Store";
import Colors from "../Colors";
import Button from "../components/Button";

const AltaPaciente = () => {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [curp, setCurp] = useState("");
  const [edad, setEdad] = useState("");
  const [tipoDeSangre, setTipoDeSangre] = useState("");
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState(new Date());
  const [show, setShow] = useState(false);

  const guardarPaciente = () => {
    if (
      nombre === "" ||
      apellidoPaterno === "" ||
      apellidoMaterno === "" ||
      curp === "" ||
      !fechaDeNacimiento ||
      edad === "" ||
      tipoDeSangre === ""
    ) {
      return Alert.alert("Favor de llenar todos los campos");
    }

    if (!curpValida(curp)) {
      return Alert.alert("La CURP no es válida");
    }

    Store.addPaciente({
      nombres: nombre,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      curp: curp,
      edad: +edad,
      fechaDeNacimiento: fechaDeNacimiento.toString(),
      tipoDeSangre: tipoDeSangre,
      estaActivo: false,
    });
    return Alert.alert(
      "Paciente agregado",
      "El paciente se ha agregado correctamente",
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

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
              onChangeText={setNombre}
              value={nombre}
            />
            <Text style={styles.label}>Apellido Paterno</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setApellidoPaterno}
              value={apellidoPaterno}
            />
            <Text style={styles.label}>Apellido Materno</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setApellidoMaterno}
              value={apellidoMaterno}
            />
            <Text style={styles.label}>CURP</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setCurp}
              value={curp}
              maxLength={18}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.label}>Fecha de Nacimiento</Text>
              {Platform.OS === "ios" ? (
                <DateTimePicker
                  value={fechaDeNacimiento}
                  maximumDate={new Date()}
                  locale="es-ES"
                  onChange={(val, date) => setFechaDeNacimiento(new Date(date))}
                />
              ) : (
                <>
                  {show ? (
                    <DateTimePicker
                      value={fechaDeNacimiento}
                      maximumDate={new Date()}
                      locale="es-ES"
                      onChange={(val, date) => {
                        setShow(false);
                        setFechaDeNacimiento(new Date(date));
                      }}
                    />
                  ) : (
                    <TextInput
                      style={styles.textInput}
                      value={`${fechaDeNacimiento.getDate()}/${
                        fechaDeNacimiento.getMonth() + 1
                      }/${fechaDeNacimiento.getFullYear()}`}
                      onFocus={() => setShow(true)}
                    />
                  )}
                </>
              )}
            </View>
            <Text style={styles.label}>Edad</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={setEdad}
              value={edad}
            />
            <Text style={styles.label}>Tipo de Sangre</Text>
            <Picker
              onValueChange={(item) => setTipoDeSangre(item)}
              selectedValue={tipoDeSangre}
              style={{
                backgroundColor: Colors.card,
                borderRadius: 15,
              }}
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
            </Picker>

            <View />
            <View />

            <View style={styles.footer}>
              <Button
                title="Cancelar"
                color="#D9D9D9"
                onPress={() => navigation.goBack()}
              />
              <Button title="Crear" onPress={() => guardarPaciente()} />
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

//Función para validar una CURP
function curpValida(curp) {
  var re =
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
    validado = curp.match(re);

  if (!validado)
    //Coincide con el formato general?
    return false;

  return true; //Validado
}

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
