import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbarExport,
  esES,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";

const Table = ({
  rows,
  columns,
  idKey,
  checkboxSelection = false,
  disableSelectionOnClick = false,
  filter = true,
  exportable = false,
  printFn = () => {},
  onSelectionChange = (idsSeleccionados) => {},
  ...props
}) => {
  const ToolbarFilter = (props) => {
    const { print, exportCsv, ...rest } = props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <GridToolbarQuickFilter {...rest} />
        {props.print ? <Button onClick={printFn}>Imprimir</Button> : null}
        {/* <GridToolbarExport
          csvOptions={{ disableToolbarButton: !props.exportCsv }}
          printOptions={{
            disableToolbarButton: !props.print,
            hideFooter: true,
            hideToolbar: true,
          }}
        /> */}
      </div>
    );
  };
  return (
    <Box sx={{ height: 650, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row[idKey ?? "id"]}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection={checkboxSelection}
        onSelectionModelChange={onSelectionChange}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        // localeText={{
        //   toolbarDensity: "Densidad de vista",
        //   toolbarDensityLabel: "Densidad de vista",
        //   toolbarDensityCompact: "Comprimido",
        //   toolbarDensityStandard: "Medio",
        //   toolbarDensityComfortable: "Espacioso",
        //   // toolbarFiltersLabel: "Buscar",
        //   toolbarQuickFilterPlaceholder: "Filtrar",
        // }}
        // Toolbar={ filter ? ToolbarFilter : null}

        components={{ Toolbar: filter ? ToolbarFilter : null }}
        componentsProps={{
          toolbar: {
            exportCsv: exportable,
            print: exportable,
            // showQuickFilter: true,
            // quickFilterProps: { debounceMs: 100 },
          },
        }}
        disableSelectionOnClick={disableSelectionOnClick}
        experimentalFeatures={{ newEditingApi: false }}
        {...props}
      />
    </Box>
  );
};
export default Table;
