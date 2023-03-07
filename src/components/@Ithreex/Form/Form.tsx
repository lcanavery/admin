import React from "react";
import { Formik } from "formik";
import { Grid, Button, FormHelperText } from "@mui/material";
import Inputs from "../Inputs";
const Form = ({
  variant,
  validations,
  onSubmit,
  inputs,
  initialValues,
  submitLabel,
  orientation,
  cancel = null,
  submitButtonType = "contained",
  ...props
}) => {
  const gridsize = orientation === "horizontal" ? 6 : 12;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validations}
      onSubmit={variant !== "show" && onSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        setFieldValue,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          {orientation === "horizontal" ? (
            <div style={{ display: "flex" }}>
              {inputs
                ?.filter((i) => !i.hideOn?.includes(variant))
                .map((inpt, index) => (
                  <div key={index}>
                    <Grid
                      item
                      xs={3}
                      style={{
                        margin: "auto",
                        minWidth: "100px",
                        marginRight: "10px",
                      }}
                    >
                      {Inputs[inpt.type ?? "text"]?.({
                        variant,
                        errors,
                        setFieldValue,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                        inpt,
                      })}
                    </Grid>
                  </div>
                ))}
              <Grid
                item
                xs={3}
                style={{ margin: submitButtonType === "text" ? 0 : "auto" }}
              >
                <Grid
                  item
                  xs={3}
                  style={{ marginTop: "28px", display: "flex" }}
                >
                  {cancel ? (
                    <Button
                      style={{ marginRight: "10px" }}
                      disableElevation
                      disabled={isSubmitting}
                      onClick={() => {
                        cancel?.();
                      }}
                      fullWidth
                      size="large"
                      type="button"
                      variant="outlined"
                      color="primary"
                    >
                      Cancelar
                    </Button>
                  ) : null}
                  {variant !== "show" && (
                    <Button
                      disableElevation
                      // disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant={
                        submitButtonType === "text" ? "text" : "contained"
                      }
                      color="primary"
                    >
                      {submitLabel}
                    </Button>
                  )}
                </Grid>
              </Grid>
            </div>
          ) : (
            <Grid container spacing={3}>
              {inputs
                ?.filter((i) => !i.hideOn?.includes(variant))
                .map((inpt, index) => (
                  <Grid key={index} item xs={gridsize}>
                    <Grid item xs={3} style={{ margin: "auto" }}>
                      {Inputs[inpt.type ?? "text"]?.({
                        variant,
                        errors,
                        setFieldValue,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                        inpt,
                      })}
                    </Grid>
                  </Grid>
                ))}

              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>
                    {errors.submit.toString()}
                  </FormHelperText>
                </Grid>
              )}
              <Grid
                container
                spacing={3}
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {cancel ? (
                  <Grid item xs={3}>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      onClick={() => {
                        cancel?.();
                      }}
                      fullWidth
                      size="large"
                      type="button"
                      variant="outlined"
                      color="primary"
                    >
                      Cancelar
                    </Button>
                  </Grid>
                ) : null}
                {variant !== "show" && (
                  <Grid item xs={3}>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {submitLabel}
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          )}
        </form>
      )}
    </Formik>
  );
};

export default Form;
