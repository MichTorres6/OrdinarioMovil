import { useEffect, useState } from "react";
import { Alert } from "react-native";
import Store from "../Store";

export const useListaEspera = () => {
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

  return {
    emergencias,
    filter,
    onPress,
    modalVisible,
    setModalVisible,
    nivel,
    cargando,
  };
};
