import { AxiosInstance } from "axios";

const rolOptionsServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/rol-options?include=options").then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const update = (id, values) => instance.put("/rol-options/" + id, values);
  const del = (id) => instance.delete("/rol-options/" + id);
  const show = (id) =>
    instance.get("/rol-options/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/rol-options", values);
  const getOptionsByRol = (rol) => instance.get("/rol-options?&rolId=" + rol);
  return {
    list,
    update,
    del,
    show,
    create,
    getOptionsByRol,
  };
};
export default rolOptionsServices;
