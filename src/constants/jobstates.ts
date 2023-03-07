export enum jobstates {
  Creado = 1,
  Procesando = 2,
  Finalizado = 3,
  Error = 4,
}
export const jobStatesById = {
  1: "Creado",
  2: "Procesando",
  3: "Finalizado",
  4: "Error",
};
export const badgeJobStatesById = {
  1: "primary",
  2: "primary",
  3: "success",
  4: "error",
};

export const jobsTypes = {
  generarNovedades: "Generacion de novedades",
  iniciarRentabilidad: "Inicializacion de Rentabilidad",

  generarBaseDeDatos: "Generar base de datos",
};
