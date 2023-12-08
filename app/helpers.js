import Colors from "./Colors";

export const getColorByNivel = (nivel) => {
  switch (nivel) {
    case "1":
      return "red";
    case "2":
      return "#F08C00";
    case "3":
      return "#F6BD00";
    case "4":
      return "#3CA62E";
    case "5":
      return "#175FA9";
    default:
      return Colors.card;
  }
};

export const getTitleByNivel = (nivel) => {
  switch (nivel) {
    case "1":
      return "Reanimación";
    case "2":
      return "Emergencia";
    case "3":
      return "Urgencia";
    case "4":
      return "Prioritario";
    case "5":
      return "No urgente";
    default:
      return "No urgente";
  }
};

export const getColorByEstado = (estado) => {
  switch (estado) {
    case "Espera":
      return "red";
    case "Validacion":
      return "#175FA9";
    case "Consulta":
      return "#3CA62E";
    case "Hospitalizacion":
      return "#F08C00";
    case "Alta":
      return "#A4A6A7";
    default:
      return "white";
  }
};

//Sacar en formato 'dd mes aaaa'
export const convertirFecha = (fecha) => {
  const date = new Date(fecha);
  const day = date.getDate();
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio ",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre ",
  ];
  const month = date.getMonth();
  const year = date.getFullYear();
  return `Fecha ${day} ${meses[month]} ${year}`;
};
