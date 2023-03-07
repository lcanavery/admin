import { AxiosInstance } from "axios";

const sapCustomersServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/sap-customers").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const getClients = () =>
    instance.get(`/sap-customers/all/1`).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });

  const getSucursalesByClient = (client) =>
    instance
      .get(`/sap-customers/byCustomerCode/${client}`)
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const update = (id, values) => instance.put("/sap-customers/" + id, values);
  const del = (id) => instance.delete("/sap-customers/" + id);
  const show = (id) =>
    instance.get("/sap-customers/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/sap-customers", values);
  return {
    list,
    update,
    del,
    show,
    create,
    getSucursalesByClient,
    getClients,
  };
};
export default sapCustomersServices;
