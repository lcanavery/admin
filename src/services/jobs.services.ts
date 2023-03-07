import { AxiosInstance } from "axios";

const jobsServices = (instance: AxiosInstance) => {
  const list = ({ created_user }) =>
    instance.get(`/jobs?created_user=${created_user}`).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });

  const getById = (id) =>
    instance.get("/jobs/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });

  return {
    list,
    getById,
  };
};
export default jobsServices;
