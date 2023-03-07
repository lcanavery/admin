export type UserLogin = {
  usu_mail: string;
  usu_clave: string;
};

export type UserSignIn = {
  usu_mail: string;
  usu_clave: string;
  usu_nombre: string;
  usu_tipo: number;
  sap_codigo_cliente: number;
  rol_id: number;
  sap_codigo_sucursal: number;
};
