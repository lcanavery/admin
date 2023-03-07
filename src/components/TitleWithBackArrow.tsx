import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { ArrowLeftOutlined } from "@ant-design/icons";

const TitleWithBackArrow = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowLeftOutlined />
      </IconButton>
      {title}
    </div>
  );
};

export default TitleWithBackArrow;
