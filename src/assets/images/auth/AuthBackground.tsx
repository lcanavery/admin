// material-ui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  const theme = useTheme();

  return (
    <Box
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#01b1c7",
      }}
      sx={{
        position: "absolute",

        zIndex: -1,
        bottom: 0,
      }}
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      ></div>
    </Box>
  );
};

export default AuthBackground;
