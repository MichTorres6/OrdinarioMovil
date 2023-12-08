import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import Store from "../Store";

export const useAltaEmergencia = (paciente) => {
  const navigation = useNavigation();
  const [triaje, setTriaje] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const guardarEmergencia = () => {
    if (triaje === "" || observaciones === "") {
      return Alert.alert("Favor de llenar todos los campos");
    }
    if (observaciones.length < 50) {
      return Alert.alert(
        "El campo observaciones debe tener al menos 50 caracteres"
      );
    }

    Store.addEmergencia({
      paciente: paciente,
      nivel: triaje,
      Observaciones: [
        { fecha: new Date().toISOString(), texto: observaciones },
      ],
      status: triaje === "1" ? "Validacion" : "Espera",
    });

    Store.setPacienteActivo(paciente.curp, true);

    return Alert.alert(
      "Paciente agregado",
      "El paciente se ha agregado correctamente",
      [
        {
          text: "OK",
          onPress: () => navigation.pop(2),
        },
      ]
    );
  };

  return {
    triaje,
    setTriaje,
    observaciones,
    setObservaciones,
    guardarEmergencia,
  };
};
