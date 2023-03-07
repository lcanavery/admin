import React from "react";
import PropTypes from "prop-types";

// ==============================|| CODE HIGHLIGHTER ||============================== //

export default function SyntaxHighlight({ children, ...others }: any) {
  return <>{children}</>;
}

SyntaxHighlight.propTypes = {
  children: PropTypes.node,
};
