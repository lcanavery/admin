import { AxiosInstance } from "axios";

const materialServices = (instance: AxiosInstance) => {
  const list = () =>
    instance
      .get("/material?include=tipoBase,subProducto,tipoMaterial")
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const listBases = (subProducto, tipoBase) =>
    instance
      .get(
        `/material?include=tipoBase,subProducto,tipoMaterial&id_tipo_material=1&id_tipo_subproducto=${subProducto}&id_tipo_base=${tipoBase}`
      )
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const listPigmentos = () =>
    instance
      .get(
        "/material?include=tipoBase,subProducto,tipoMaterial&id_tipo_material=2"
      )
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const update = (id, values) => instance.put("/material/" + id, values);
  const del = (id) => instance.delete("/material/" + id);
  const show = (id) =>
    instance.get("/material/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/material", values);

  return {
    list,
    update,
    del,
    show,
    create,
    listPigmentos,
    listBases,
  };
};
export default materialServices;
