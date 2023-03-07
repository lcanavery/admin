export enum userTypesIds {
  Administrador = 1,
  Colorin = 2,
  Industria = 3,
  HayColor = 4,
  Integraciones = 5,
}

export const userTypes = {
  [1]: "Administrador",
  [2]: "Colorin",
  [3]: "Industria",
  [4]: "Hay Color",
  [5]: "Integraciones",
};

export const creatableUserTypeByUserType = {
  [userTypesIds.Administrador]: [
    userTypesIds.Administrador,
    userTypesIds.Colorin,
    userTypesIds.HayColor,
    userTypesIds.Industria,
  ],
  [userTypesIds.Colorin]: [userTypesIds.Colorin],
  [userTypesIds.HayColor]: [userTypesIds.HayColor],
  [userTypesIds.Industria]: [userTypesIds.Industria],
};
