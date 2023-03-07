import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";

// material-ui
import { ButtonBase } from "@mui/material";

// project import
import Logo from "./Logo";
import config from "../../config";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, open }: any) => (
  <ButtonBase disableRipple component={Link} to={config.defaultPath} sx={sx}>
    <Logo open={open} />
  </ButtonBase>
);

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
  open: PropTypes.bool,
};

export default LogoSection;
