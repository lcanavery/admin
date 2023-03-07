import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FormHelperText, InputLabel } from "@mui/material";

const Date = ({
  variant,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
  inpt: { label, id, type, name, placeholder, defaultValue, disabledOn },
  ...props
}) => {
  return (
    <Stack component="form" spacing={1}>
      <InputLabel htmlFor={id}>{label} </InputLabel>
      <TextField
        id={id}
        type={"date"}
        disabled={variant === "show" || disabledOn?.includes(variant)}
        // label={label}
        name={name}
        value={values[name]}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        onChange={handleChange}
        fullWidth
        error={Boolean(touched[name] && errors[name])}
        // sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {touched[name] && errors[name] && (
        <FormHelperText error id={"standard-weight-helper-text-" + id}>
          {errors[name].toString()}
        </FormHelperText>
      )}
    </Stack>
  );
};
export default Date;
