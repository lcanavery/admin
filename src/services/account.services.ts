import { AxiosInstance } from "axios";

const accountServices = (instance: AxiosInstance) => {
  const list = (roles, sapCliente?, sapSucursal?) =>
    instance
      .get(
        `/account?include=userType,userRol&roles=${roles?.join(
          ","
        )}&sapCliente=${sapCliente}&sapSucursal=${sapSucursal}&perPage=100`
      )
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const update = (id, values) => instance.put("/account/" + id, values);
  const del = (id) => instance.delete("/account/" + id);
  const show = (id) =>
    instance.get("/account/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/account/signin", values);
  const rolesOptions = () =>
    instance.get("/roles").then((response) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const userTypesOptions = () =>
    instance.get("/userType").then((response) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  return {
    list,
    update,
    del,
    show,
    create,
    rolesOptions,
    userTypesOptions,
  };
};
export default accountServices;
