import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import Store from "../Store";

export const useAltaPaciente = () => {
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

  return {
    nombre,
    setNombre,
    apellidoPaterno,
    setApellidoPaterno,
    apellidoMaterno,
    setApellidoMaterno,
    curp,
    setCurp,
    edad,
    setEdad,
    tipoDeSangre,
    setTipoDeSangre,
    fechaDeNacimiento,
    setFechaDeNacimiento,
    show,
    setShow,
    guardarPaciente,
  };
};
