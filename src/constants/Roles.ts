export enum roles {
  superAdmin = 1,
  admin = 2,
  cliente = 3,
  sucursal = 4,
  marketing = 5,
  integraciones = 6,
  AdministradorUsuarios = 7,
  AdministradorColores = 8,
}

export const gruposDeRoles = {
  todos: [
    roles.superAdmin,
    roles.admin,
    roles.cliente,
    roles.sucursal,
    roles.integraciones,
    roles.marketing,
    roles.AdministradorUsuarios,
    roles.AdministradorColores,
  ],
  level1: [roles.superAdmin],
  level2: [roles.superAdmin, roles.admin],
  level3: [
    roles.superAdmin,
    roles.admin,
    roles.cliente,
    roles.AdministradorUsuarios,
    roles.AdministradorColores,
  ],
  level4: [
    roles.superAdmin,
    roles.admin,
    roles.cliente,
    roles.sucursal,
    roles.AdministradorUsuarios,
    roles.AdministradorColores,
  ],
};

export const visibleUserRolesByRol = {
  [roles.superAdmin]: gruposDeRoles.todos,
  [roles.admin]: [
    roles.admin,
    roles.cliente,
    roles.sucursal,
    roles.integraciones,
    roles.AdministradorUsuarios,
    roles.AdministradorColores,
  ],
  [roles.cliente]: [roles.cliente, roles.sucursal],
  [roles.sucursal]: [],
  [roles.AdministradorUsuarios]: gruposDeRoles.todos,
  [roles.AdministradorColores]: [],
};

export const creatableRolesByRol = {
  [roles.superAdmin]: gruposDeRoles.todos,
  [roles.admin]: [
    roles.cliente,
    roles.sucursal,
    roles.integraciones,
    roles.AdministradorUsuarios,
    roles.AdministradorColores,
  ],
  [roles.cliente]: [roles.sucursal],
  [roles.sucursal]: [],
  [roles.AdministradorUsuarios]: gruposDeRoles.todos,
  [roles.AdministradorColores]: [],
};
