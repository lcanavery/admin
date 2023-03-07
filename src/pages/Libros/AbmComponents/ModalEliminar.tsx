import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalEliminar({
  open,
  handleClose,
  accept,
  cancel,
  title,
  message,
  loadingEliminar,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={!loadingEliminar && handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title ? title : "Desea eliminar el registro?"}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {message ? message : ""}
            </Typography>
            <Button disabled={loadingEliminar} onClick={cancel}>
              Cancelar
            </Button>
            <Button disabled={loadingEliminar} onClick={accept}>
              Si, eliminar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
