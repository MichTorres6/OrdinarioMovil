import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/screens/Home";
import AltaPaciente from "./app/screens/AltaPaciente";
import AltaEmergencia from "./app/screens/AltaEmergencia";
import ListaEspera from "./app/screens/ListaEspera";
import ListaPacientes from "./app/screens/ListaPacientes";
import Informacion from "./app/screens/Informacion";
import Colors from "./app/Colors";
import BuscarPaciente from "./app/screens/BuscarPaciente";
import Paciente from "./app/screens/Paciente";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AltaPaciente"
          component={AltaPaciente}
          options={{ headerTitle: "Alta de paciente" }}
        />
        <Stack.Screen
          name="BuscarPaciente"
          component={BuscarPaciente}
          options={{ headerTitle: "Buscar Paciente" }}
        />
        <Stack.Screen
          name="AltaEmergencia"
          component={AltaEmergencia}
          options={{ headerTitle: "Registrar Emergencia" }}
        />
        <Stack.Screen
          name="ListaEspera"
          component={ListaEspera}
          options={{ headerTitle: "Lista de espera" }}
        />
        <Stack.Screen
          name="ListaPacientes"
          component={ListaPacientes}
          options={{ headerTitle: "Lista de Pacientes" }}
        />
        <Stack.Screen
          name="Paciente"
          component={Paciente}
          options={{ headerTitle: "Paciente" }}
        />
        <Stack.Screen
          name="Informacion"
          component={Informacion}
          options={{ headerTitle: "Información" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
