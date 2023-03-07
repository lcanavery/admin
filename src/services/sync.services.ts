import { AxiosInstance } from "axios";

const syncServices = (instance: AxiosInstance) => {
  const generateFile = () =>
    instance.get("/sync/generate-file").then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const getFile = (id) =>
    instance.get(`/sync/get-file/${id}`).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const generateNewsFile = (date) =>
    instance
      .get("/sync/news/generate-file?dateFrom=" + date + " 00:00:00")
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const getNewsFile = (id) =>
    instance.get(`/sync/news/get-file/${id}`).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });

  const databaseSync = (formData) =>
    instance
      .post("/sync/data-sync", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response: any) => {
        const { result, ...rest } = response.data;
        return [result, rest];
      });
  const localFirstSync = (file) =>
    instance.post("/sync", { prueba: file }).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const localNewsSync = (file) =>
    instance.post("/sync/news", { prueba: file }).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  return {
    generateFile,
    getFile,
    generateNewsFile,
    getNewsFile,
    databaseSync,
    localFirstSync,
    localNewsSync,
  };
};
export default syncServices;
