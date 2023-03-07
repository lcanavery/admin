import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Counter } from "../Counter";
import config from "../../../config";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function SessionExpire(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [alertTimer, setAlertTimer] = useState(null);
  const [closeTimer, setCloseTimer] = useState(null);
  // let timeout;
  document.onmousedown = () => {
    setOpen(false);
    clearTimeout(alertTimer);
    clearTimeout(closeTimer);
    setAlertTimer((prev) => {
      clearTimeout(prev);
      return contadorAlerta();
    });
    setCloseTimer((prev) => {
      clearTimeout(prev);
      return contadorClose();
    });
  };
  function contadorAlerta() {
    const timer2 = setTimeout(() => {
      console.log("alerta");
      setOpen(true);
    }, config.sessionExpireAlert || 10000);
    return timer2;
  }
  function contadorClose() {
    const timer2 = setTimeout(() => {
      console.log("close");
      props.logout();
      navigate("/");
      setOpen(true);
    }, config.sessionExpire || 15000);
    return timer2;
  }
  useEffect(() => {
    if (!alertTimer) {
      setAlertTimer(contadorAlerta());
      setCloseTimer(contadorClose());
    } else {
      setAlertTimer((prev) => {
        clearTimeout(prev);
        return contadorAlerta();
      });
      setCloseTimer((prev) => {
        clearTimeout(prev);
        return contadorClose();
      });
    }
    return () => {
      clearTimeout(alertTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h4>La sesión se cerrará por inactividad.</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "2rem",
              }}
            >
              {/* <Button onClick={handleClose}>Cerrar Sesión</Button> */}
              <Button variant="contained" onClick={handleClose}>
                Estoy Aca!
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
const mapState = (state: any) => {
  return {
    userProfile: state.sso.userProfile,
  };
};
const mapDispatch = (dispatch: any) => {
  return {
    logout: () => dispatch.sso.logout(),
  };
};

export default connect(mapState, mapDispatch)(SessionExpire);
