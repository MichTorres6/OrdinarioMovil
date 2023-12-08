import { useEffect, useState } from "react";
import Store from "../Store";
import { useNavigation } from "@react-navigation/native";

export const useListaPacientes = (isFocused) => {
  const navigation = useNavigation();
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

  return {
    emergencias,
    onPress,
    cargando,
    texto,
    setTexto,
    buscar,
  };
};
