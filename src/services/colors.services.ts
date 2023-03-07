import { AxiosInstance } from "axios";

const colorsServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/color?perPage=100000").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const getById = (id) =>
    instance.get("/color/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const listByBooksAndClient = (books, sapCodigoCliente = "false") =>
    instance
      .get(`/color/byBooks/${sapCodigoCliente}?books=${books.join(",")}`)
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const listOwn = (sapCodigoCliente = "false") =>
    instance.get(`/color/propios/${sapCodigoCliente}`).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const update = (id, values) => instance.put("/color/" + id, values);
  const del = (id) => instance.delete("/color/" + id);
  const show = (id) =>
    instance.get("/color/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const search = (codigo) =>
    instance
      .get("/color/?include=formula&col_codigo=" + codigo)
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const create = (values) => instance.post("/color", values);
  return {
    list,
    update,
    del,
    show,
    create,
    search,
    listByBooksAndClient,
    listOwn,
    getById,
  };
};
export default colorsServices;
