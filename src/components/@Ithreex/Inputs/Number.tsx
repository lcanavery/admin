import React from "react";
import {
  FormHelperText,
  InputLabel,
  Stack,
  OutlinedInput,
} from "@mui/material";

const Number = ({
  variant,
  errors,
  setFieldValue,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
  inpt: { label, id, type, name, placeholder, disabledOn },
  ...props
}) => {
  const onChange = (event) => {
    setFieldValue(name, +event.target.value);
    // handleChange(parseInt(event.target.value));
  };
  return (
    <Stack spacing={1}>
      <InputLabel htmlFor={id}>{label} </InputLabel>
      <OutlinedInput
        disabled={variant === "show" || disabledOn?.includes(variant)}
        id={id}
        type={"number"}
        value={values[name]}
        name={name}
        onBlur={handleBlur}
        onChange={onChange}
        placeholder={placeholder ?? ""}
        fullWidth
        inputProps={{ inputMode: "numeric" }}
        error={Boolean(touched[name] && errors[name])}
      />
      {touched[name] && errors[name] && (
        <FormHelperText error id={"standard-weight-helper-text-" + id}>
          {errors[name].toString()}
        </FormHelperText>
      )}
    </Stack>
  );
};
export default Number;
