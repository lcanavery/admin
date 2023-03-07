import { AxiosInstance } from "axios";

const auditServices = (instance: AxiosInstance) => {
  const list = (filter) =>
    instance
      .get(`/audit-op?include=operacion${filter}`)
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });

  const printAudit = ({ id_formula, codigo, color }) =>
    instance.post("/audit-op/print", { data: { id_formula, codigo, color } });

  return {
    list,

    printAudit,
  };
};
export default auditServices;
