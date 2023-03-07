import { AxiosInstance } from "axios";

const optionsServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/options?perPage=200").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const update = (id, values) => instance.put("/options/" + id, values);
  const del = (id) => instance.delete("/options/" + id);
  const show = (id) =>
    instance.get("/options/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/options", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default optionsServices;
