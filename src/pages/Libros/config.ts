const config = {
  key: "id_libro",
  ListTitle: "Libros",
  opcion: "libros",
  newButtonLabel: "Nuevo libro",
  eliminarTitle: `¿Desea eliminar el libro {{id}}?`,
  eliminarMessage: null,
  keyEliminar: "lib_denom",
  service: "booksServices",
  initialValues: {
    lib_denom: "",
  },
  abmTitle: "Libro",
};

export default config;
