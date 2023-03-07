// material-ui
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";
// ==============================|| DRAWER HEADER - STYLED ||============================== //

const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  paddingLeft: theme.spacing(open ? 3 : 0),
}));

export default DrawerHeaderStyled;
