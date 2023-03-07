import { AxiosInstance } from "axios";

const pigmentsFormula = (instance: AxiosInstance) => {
  const list = () =>
    instance
      .get("/pigments-formula?include=formula,material")
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const listByFormula = (idFormula) =>
    instance
      .get(`/pigments-formula?include=formula,material&id_formula=${idFormula}`)
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const update = (id, values) =>
    instance.put("/pigments-formula/" + id, values);
  const del = (id) => instance.delete("/pigments-formula/" + id);
  const show = (id) =>
    instance.get("/pigments-formula/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/pigments-formula", values);

  return {
    list,
    update,
    del,
    show,
    create,
    listByFormula,
  };
};
export default pigmentsFormula;
