import { AxiosInstance } from "axios";

const userTypesServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/userType").then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const update = (id, values) => instance.put("/userType/" + id, values);
  const del = (id) => instance.delete("/userType/" + id);
  const show = (id) =>
    instance.get("/userType/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/userType", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default userTypesServices;
