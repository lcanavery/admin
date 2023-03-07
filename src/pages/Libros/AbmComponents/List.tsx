import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../../../components/@Ithreex/Table";
import MainCard from "../../../components/MainCard";
import api from "../../../services/api";
import { columns } from "../Columns";
import { useNavigate } from "react-router-dom";
import ModalEliminar from "./ModalEliminar";
import Loading from "../../../components/Loading";
import { opciones } from "../../../constants/opciones";
import { connect } from "react-redux";
const List = ({ config, ...props }) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingEliminar, setLoadingEliminar] = useState(false);
  const [message, setMessage] = useState(null);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [row, setRow] = useState(null);
  const eliminar = () => {
    setLoadingEliminar(true);
  };
  const getData = () => {};
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {message ? (
        <Alert severity={message.type}>{message.message}</Alert>
      ) : null}
      <MainCard
        title={config?.ListTitle}
        secondary={
          <>
            {props.menu.includes(opciones[config?.opcion]?.create) && (
              <Button variant="contained" onClick={() => navigate("./create")}>
                {config?.newButtonLabel}
              </Button>
            )}
          </>
        }
      >
        {loading ? (
          <Loading />
        ) : (
          <Table idKey={config?.key} columns={columns(setRow)} rows={data} />
        )}
        <ModalEliminar
          open={row ? true : false}
          handleClose={() => setRow(null)}
          title={config?.eliminarTitle?.replace(
            "{{id}}",
            row?.[config?.keyEliminar]
          )}
          message={config?.eliminarMessage?.replace(
            "{{id}}",
            row?.[config?.keyEliminar]
          )}
          loadingEliminar={loadingEliminar}
          accept={() => eliminar()}
          cancel={() => setRow(null)}
        />
      </MainCard>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.sso.menu,
  };
};
export default connect(mapStateToProps, null)(List);
