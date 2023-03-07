import * as Yup from "yup";

export const schema = Yup.object().shape({
  lib_denom: Yup.string().required("Requerido"),
});

export const inputs = () => [
  {
    label: "Libro",
    id: "lib_denom",
    name: "lib_denom",
    placeholder: "Libro",
    type: "text",
  },
];
