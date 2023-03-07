export type userStateType = {
  token: string | null;
  refreshToken: string | null;
  userProfile: userProfile;
  sucursales: [];
  sucursalSeleccionada: "";
  clientes: [];
  clienteSeleccionado: "";
};
export type userProfile = {
  usu_id: number;
  usu_mail: string;
  rol_id: number;
  priLog: number;
  codSucursal: string;
  sapCodigoCliente: number;
  iat: number;
  exp: number;
};
