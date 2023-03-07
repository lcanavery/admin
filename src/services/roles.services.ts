import { AxiosInstance } from "axios";

const rolesServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/roles?include=options").then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const update = (id, values) => instance.put("/roles/" + id, values);
  const del = (id) => instance.delete("/roles/" + id);
  const show = (id) =>
    instance.get("/roles/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/roles", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default rolesServices;
