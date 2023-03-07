import React from "react";
import IconButton from "@mui/material/IconButton";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { opciones } from "../../../constants/opciones";
const Actions = ({
  params,
  id,
  opcionMenu,
  menu = [],
  canShow = true,
  canEdit = true,
  canDelete = true,
  ...rest
}) => {
  let navigate = useNavigate();
  return (
    <ButtonGroup size="small" aria-label="small button group">
      {menu.includes(opciones[opcionMenu]?.show) && (
        <IconButton
          onClick={
            rest.onShow
              ? () => rest.onShow(params.row)
              : () => navigate("./show/" + params.row[id])
          }
          color="primary"
          aria-label="Ver"
          component="label"
        >
          <EyeOutlined />
        </IconButton>
      )}
      {((canEdit && menu.includes(opciones[opcionMenu]?.edit)) ||
        menu.includes(opciones[opcionMenu]?.createNoPropios)) && (
        <IconButton
          onClick={
            rest.onEdit
              ? () => rest.onEdit(params.row)
              : () => navigate("./update/" + params.row[id])
          }
          color="primary"
          aria-label="Editar"
          component="label"
        >
          <EditOutlined />
        </IconButton>
      )}

      {((menu.includes(opciones[opcionMenu]?.delete) && canDelete) ||
        menu.includes(opciones[opcionMenu]?.createNoPropios)) && (
        <IconButton
          onClick={rest.eliminar}
          color="primary"
          aria-label="Eliminar"
          component="label"
        >
          <DeleteOutlined />
        </IconButton>
      )}
    </ButtonGroup>
  );
};
const mapStateToProps = (state) => {
  return {
    menu: state.sso.menu,
  };
};
export default connect(mapStateToProps, null)(Actions);
