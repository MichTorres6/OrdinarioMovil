import AsyncStorage from "@react-native-async-storage/async-storage";

class Store {
  pacientes = [];
  emergencias = [];

  constructor() {
    this.cargarStore();
  }

  async cargarStore() {
    const store = await AsyncStorage.getItem("store");
    if (store) {
      const { pacientes, emergencias } = JSON.parse(store);
      this.pacientes = pacientes;
      this.emergencias = emergencias;
    } else {
      this.pacientes = [];
      this.emergencias = [];
    }
  }

  async clearStore() {
    await AsyncStorage.clear();
    this.pacientes = [];
    this.emergencias = [];
  }

  async guardarStore() {
    await AsyncStorage.setItem(
      "store",
      JSON.stringify({
        pacientes: this.pacientes,
        emergencias: this.emergencias,
      })
    );
  }

  //Pacientes
  addPaciente(newPaciente) {
    if (this.pacientes.find((paciente) => paciente.curp === newPaciente.curp)) {
      // throw new Error("Ya existe un paciente con ese CURP");
      return;
    }
    this.pacientes.push(newPaciente);
    this.guardarStore();
  }

  getPacientes() {
    return this.pacientes;
  }

  getPacientesNoActivos() {
    return this.pacientes.filter((paciente) => !paciente.estaActivo);
  }

  getPacienteByName(name) {
    if (!name) return this.getPacientesNoActivos();
    return this.pacientes.filter((paciente) => paciente.nombres.includes(name));
  }

  getPacienteByCurp(curp) {
    return this.pacientes.find((paciente) => paciente.curp === curp);
  }

  setPacienteActivo(curp, val) {
    const paciente = this.getPacienteByCurp(curp);
    if (!paciente) return;
    paciente.estaActivo = val;
    this.guardarStore();
  }

  didPacienteExist(curp) {
    return this.pacientes.some((paciente) => paciente.curp === curp);
  }

  //Emergencias
  addEmergencia(newEmergencia) {
    this.emergencias = this.emergencias.filter(
      (emergencia) => emergencia.paciente.curp !== newEmergencia.paciente.curp
    );
    this.emergencias.push(newEmergencia);
    this.guardarStore();
  }

  getEmergenciasActivas() {
    return this.emergencias.filter(
      (emergencia) => emergencia.status !== "Espera"
    );
  }

}

export default new Store();
