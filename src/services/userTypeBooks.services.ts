import { AxiosInstance } from "axios";

const userTypeBooksServices = (instance: AxiosInstance) => {
  const list = () =>
    instance.get("/book-user-type").then((response: any) => {
      const { data, ...rest } = response.data.result;
      return [data, rest];
    });
  const listByUserType = (id_tipo_usuario) =>
    instance
      .get(`/book-user-type?id_tipo_usuario=${id_tipo_usuario}`)
      .then((response: any) => {
        const { data, ...rest } = response.data.result;
        return [data, rest];
      });
  const update = (id, values) => instance.put("/book-user-type/" + id, values);
  const del = (id) => instance.delete("/book-user-type/" + id);
  const show = (id) =>
    instance.get("/book-user-type/" + id).then((response: any) => {
      const { result, ...rest } = response.data;
      return [result, rest];
    });
  const create = (values) => instance.post("/book-user-type", values);

  return {
    list,
    update,
    del,
    show,
    create,
    listByUserType,
  };
};
export default userTypeBooksServices;
