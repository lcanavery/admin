// material-ui
import React from "react";
import { variants } from "../../constants/variants";
import { VARIANT } from "../../config";

const Logo = ({ open }) => {
  return <>{open ? <h1>A.E.</h1> : <h1>Ayudas económicas</h1>}</>;
};

export default Logo;
