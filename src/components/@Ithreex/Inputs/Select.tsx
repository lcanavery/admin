import React from "react";
import { FormHelperText } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import zIndex from "@mui/material/styles/zIndex";
const SelectInpt = ({
  variant,
  errors,
  setFieldValue,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
  inpt: { label, id, name, options, disabledOn, changeEvent },
  ...props
}) => {
  const onChange = (event: SelectChangeEvent) => {
    changeEvent?.(event);
    setFieldValue(name, event.target.value);
    // handleChange(event.target.value);
  };

  return (
    <Stack spacing={1}>
      <InputLabel id={"label-" + id}>{label}</InputLabel>
      <Select
        disabled={variant === "show" || disabledOn?.includes(variant)}
        labelId={"label-" + id}
        id={id}
        name={name}
        value={values[name]}
        onBlur={handleBlur}
        style={{ zIndex: 1500 }}
        onChange={onChange}
        // autoWidth
        MenuProps={{ style: { zIndex: 1500 } }}
        label={label}
        error={Boolean(touched[name] && errors[name])}
      >
        {options?.map((op, idx) => (
          <MenuItem
            style={{ zIndex: 1500 }}
            key={`${id}-${idx}`}
            value={op.value}
          >
            {op?.label}
          </MenuItem>
        ))}
      </Select>
      {touched[name] && errors[name] && (
        <FormHelperText error id={"standard-weight-helper-text-" + id}>
          {errors[name].toString()}
        </FormHelperText>
      )}
    </Stack>
  );
};
export default SelectInpt;
