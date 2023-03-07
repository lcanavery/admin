import { AxiosInstance } from "axios";

const booksServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/books").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const update = (id, values) => instance.put("/books/" + id, values);
  const del = (id) => instance.delete("/books/" + id);
  const show = (id) =>
    instance.get("/books/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/books", values);

  return {
    list,
    update,
    del,
    show,
    create,
  };
};
export default booksServices;
