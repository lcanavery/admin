import { AxiosInstance } from "axios";

const baseTypesServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/base-type?page=1").then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const update = (id, values) => instance.put("/base-type/" + id, values);
  const del = (id) => instance.delete("/base-type/" + id);
  const show = (id) =>
    instance.get("/base-type/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/base-type", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default baseTypesServices;
