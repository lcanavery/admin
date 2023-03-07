import { AxiosInstance } from "axios";

const subproductsTypes = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/subproduct-type?perPage=20").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const update = (id, values) => instance.put("/subproduct-type/" + id, values);
  const del = (id) => instance.delete("/subproduct-type/" + id);
  const show = (id) =>
    instance.get("/subproduct-type/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/subproduct-type", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default subproductsTypes;
