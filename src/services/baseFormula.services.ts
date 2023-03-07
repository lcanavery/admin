import { AxiosInstance } from "axios";

const baseFormulaServices = (instance: AxiosInstance) => {
  const list = () =>
    instance
      .get("/base-formula?include=material,color")
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const getByFormulaId = (formulaId) =>
    instance
      .get("/base-formula?include=material,color&id_formula=" + formulaId)
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const listByFormulas = (formulaId) =>
    instance
      .get(`/base-formula?include=material&id_formula=${formulaId}`)
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const update = (id, values) => instance.put("/base-formula/" + id, values);
  const del = (id) => instance.delete("/base-formula/" + id);
  const show = (id) =>
    instance.get("/base-formula/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/base-formula", values);

  return {
    list,
    update,
    del,
    show,
    create,
    listByFormulas,
    getByFormulaId,
  };
};
export default baseFormulaServices;
