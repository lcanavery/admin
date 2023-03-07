import { AxiosInstance } from "axios";

const operationsServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get(`/operation`).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });

  return {
    list,
  };
};
export default operationsServices;
