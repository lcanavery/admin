import React, { useEffect, useState } from "react";
import Form from "../../components/@Ithreex/Form";
import { useParams } from "react-router-dom";
import MainCard from "../../components/MainCard";
import api from "../../services/api";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { inputs, schema } from "./Formulario";
import config from "./config";
import Loading from "../../components/Loading";
const Abm = ({ variant, ...props }) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(config.initialValues);
  const [message, setMessage] = useState(null);

  useEffect(() => {}, []);

  const Create = (values) => {};
  const Update = (values) => {};
  const Cancel = () => {};

  const submit = (values) => {};
  return (
    <>
      {message ? (
        <Alert severity={message.type}>{message.message}</Alert>
      ) : null}
      <MainCard title={config.abmTitle}>
        {loading ? (
          <Loading />
        ) : (
          <Form
            variant={variant ? variant : "update"}
            orientation={"vertical"}
            submitLabel={variant === "create" ? "Crear" : "Actualizar"}
            validations={schema}
            onSubmit={submit}
            cancel={Cancel}
            initialValues={data ? data : config.initialValues}
            inputs={inputs()}
          />
        )}
      </MainCard>
    </>
  );
};
export default Abm;
