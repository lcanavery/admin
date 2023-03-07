import React from "react";
import Actions from "../../components/@Ithreex/Table/Actions";
import config from "./config";
export const columns = (eliminar) => [
  // { field: "id_libro", headerName: "ID", width: 90, disableColumnMenu: true },

  {
    field: "lib_denom",
    headerName: "Denominación",
    flex: 1,
    editable: false,
    disableColumnMenu: true,
  },

  {
    field: "acciones",
    headerName: "Acciones",
    // flex: 1,
    width: 130,
    editable: true,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => (
      <Actions
        opcionMenu="libros"
        params={params}
        id={config.key}
        eliminar={() => eliminar(params.row)}
      />
    ),
  },
];
