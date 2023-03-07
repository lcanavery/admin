import { AxiosInstance } from "axios";

const formulasServices = (instance: AxiosInstance) => {
  const list = () =>
    instance
      .get("/formulas?include=base,subProducto,libro,color&perPage=100000")
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const getByColorId = (colorId) =>
    instance
      .get(
        "/formulas?include=base,subProducto,libro,color&perPage=100000&id_color=" +
          colorId
      )
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const listByBooksAndClient = (books, sapCodigoCliente = "false") =>
    instance
      .get(
        `/formulas/byBooks/${sapCodigoCliente}?books=${books.join(
          ","
        )}&include=base,subProducto,libro,color`
      )
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const listOwn = (sapCodigoCliente = "false") =>
    instance
      .get(
        `/formulas/propios/${sapCodigoCliente}&include=base,subProducto,libro,color`
      )
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });

  const options = () =>
    instance.get("/formulas?perPage=100000").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const listByColorId = (colorId) =>
    instance
      .get(`/formulas?include=base,subProducto,libro,color&id_color=${colorId}`)
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });

  const getPriceByFormulaAndBaseFormula = (
    formulaBase,
    formulaId,
    codigoCliente = "gas",
    codigoSucursal = "ped"
  ) =>
    instance.get(
      `/formula-price/${formulaId}/${formulaBase}?codigoCliente=${codigoCliente}&codigoSucursal=${codigoSucursal}`
    );
  const update = (id, values) => instance.put("/formulas/" + id, values);
  const del = (id) => instance.delete("/formulas/" + id);
  const show = (id) =>
    instance.get("/formulas/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/formulas", values);

  return {
    list,
    update,
    del,
    show,
    create,
    listByColorId,
    getPriceByFormulaAndBaseFormula,
    options,
    listOwn,
    listByBooksAndClient,
    getByColorId,
  };
};
export default formulasServices;
