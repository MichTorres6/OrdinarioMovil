import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Store from "../Store";

export const useBuscarPaciente = () => {
  const navigation = useNavigation();
  const [cargando, setCargando] = useState(false);
  const [texto, setTexto] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [buscado, setBuscado] = useState(false);

  const buscar = async () => {
    try {
      setCargando(true);

      const pacientes = Store.getPacienteByName(texto);
      setPacientes(pacientes ?? []);
    } catch (error) {
    } finally {
      setCargando(false);
      setBuscado(true);
    }
  };

  const addEmergencia = (paciente) => {
    navigation.navigate("AltaEmergencia", { paciente });
  };

  return {
    cargando,
    texto,
    setTexto,
    pacientes,
    buscar,
    buscado,
    addEmergencia,
  };
};
