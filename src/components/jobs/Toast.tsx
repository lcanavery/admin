import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { connect } from "react-redux";
import api from "../../services/api";
import { jobstates } from "../../constants/jobstates";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const JobsAlert = (props) => {
  const [job, setJob] = React.useState(null);
  const getJob = () => {
    if (!props.currentJob) {
      return;
    }
    api.jobsServices
      .getById(props.currentJob)
      .then((r: any) => {
        setJob(r[0]);

        if (
          r[0].estado === jobstates.Error ||
          r[0].estado === jobstates.Finalizado
        ) {
          return;
        } else {
          setTimeout(() => getJob(), 10000);
        }
      })
      .catch((e) => {
        props.setCurrentJob(null);
      });
  };
  useEffect(() => {
    getJob();
  }, [props.currentJob]);

  const onClose = () => {
    props.setCurrentJob(null);
  };
  if (!props.currentJob) return <></>;
  return (
    <Snackbar open={true} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={
          job?.estado === jobstates.Finalizado
            ? "success"
            : job?.estado === jobstates.Error
            ? "error"
            : "warning"
        }
        sx={{ width: "100%" }}
      >
        {job?.estado === jobstates.Creado ||
        job?.estado === jobstates.Procesando
          ? `Se está realizando la tarea #${job?.id}`
          : job?.estado === jobstates.Error
          ? `Falló la tarea #${job?.id}`
          : job?.estado === jobstates.Finalizado
          ? `La tarea terminó correctamente #${job?.id}`
          : "Error en el proceso de tareas"}
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state) => {
  return {
    currentJob: state.sso.currentJob,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentJob: dispatch.sso.setCurrentJob,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(JobsAlert);
