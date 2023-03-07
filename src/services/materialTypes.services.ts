import { AxiosInstance } from "axios";

const materialTypesServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/material-type?page=1").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const update = (id, values) => instance.put("/material-type/" + id, values);
  const del = (id) => instance.delete("/material-type/" + id);
  const show = (id) =>
    instance.get("/material-type/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/material-type", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default materialTypesServices;
