import { AxiosInstance } from "axios";

const priceListServices = (instance: AxiosInstance) => {
  const list = (sapCodigoCliente = "false") =>
    instance
      .get(`/price-list/byClient/${sapCodigoCliente}`)
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const update = (id, values) => instance.put("/price-list/" + id, values);
  const del = (id) => instance.delete("/price-list/" + id);
  const show = (id) =>
    instance.get("/price-list/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/price-list", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default priceListServices;
