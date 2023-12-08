import { useState } from "react";
import { Alert } from "react-native";
import Store from "../Store";

export const usePaciente = (selectedEmergencia) => {
  const [actualizacion, setActualizacion] = useState("");
  const [emergencia, setEmergencia] = useState(selectedEmergencia);
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

  return {
    emergencia,
    setEmergencia,
    actualizacion,
    setActualizacion,
    addObservacion,
    modalVisible,
    setModalVisible,
    onUpdateStatus,
  };
};
