import { AxiosInstance } from "axios";

const rentabilidadServices = (instance: AxiosInstance) => {
  const list = (sap_cliente, sap_sucursal) =>
    instance
      .get(
        `/material-cost?include=material,lista_precio&perPage=4000&sap_codigo_sucursal=${sap_sucursal}&sap_codigo_cliente=${sap_cliente}`
      )
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const listBySucursal = (sap_cliente, sap_sucursal) =>
    instance
      .get(
        `/material-cost/bySucursal/${sap_cliente}/${sap_sucursal}?include=material`
      )
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const initBySucursal = (sap_cliente, sap_sucursal) =>
    instance
      .post(`/material-cost/init`, {
        sap_codigo_cliente: sap_cliente,
        sap_codigo_sucursal: sap_sucursal,
      })
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const update = (id, values) => instance.put("/material-cost/" + id, values);
  const modifyMultiple = (ids, modifyBy, all, sucursal) =>
    instance.post("/material-cost/modifyMultiple", {
      ids: ids,
      modifyBy,
      all,
      sucursal,
    });
  const del = (id) => instance.delete("/material-cost/" + id);
  const show = (id) =>
    instance.get("/material-cost/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/material-cost", values);

  return {
    list,
    update,
    del,
    show,
    create,
    modifyMultiple,
    listBySucursal,
    initBySucursal,
  };
};
export default rentabilidadServices;
