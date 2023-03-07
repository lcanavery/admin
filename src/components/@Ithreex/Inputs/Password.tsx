import React, { useState } from "react";
import {
  FormHelperText,
  InputLabel,
  Stack,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Password = ({
  variant,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
  inpt: { label, id, type, name, placeholder, disabledOn },
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack spacing={1}>
      <InputLabel htmlFor={id}>{label} </InputLabel>
      <OutlinedInput
        disabled={variant === "show" || disabledOn?.includes(variant)}
        id={id}
        type={showPassword ? "text" : "password"}
        value={values[name]}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder ?? ""}
        fullWidth
        error={Boolean(touched[name] && errors[name])}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
              size="large"
            >
              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </IconButton>
          </InputAdornment>
        }
      />
      {touched[name] && errors[name] && (
        <FormHelperText error id={"standard-weight-helper-text-" + id}>
          {errors[name].toString()}
        </FormHelperText>
      )}
    </Stack>
  );
};
export default Password;
