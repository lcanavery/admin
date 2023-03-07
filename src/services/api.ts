import axios from "axios";
import config from "../../src/config";
import onlineServices from "./online.services";
import accountServices from "./account.services";
import formulasServices from "./formulas.services";
import booksServices from "./books.services";
import rolesServices from "./roles.services";
import baseFormulaServices from "./baseFormula.services";
import optionsServices from "./options.services";
import rolOptionsServices from "./rolOptions.services";
import materialServices from "./material.services";
import materialTypesServices from "./materialTypes.services";
import sapCustomersServices from "./sapCustomers.services";
import userTypesServices from "./userTypes.services";
import pigmentsFormula from "./pigmentsFormula.services";
import colorsServices from "./colors.services";
import priceListServices from "./priceList.services";
import subproductsTypes from "./subproductsTypes";
import baseTypesServices from "./baseTypes.services";
import rentabilidadServices from "./rentabilidad.services";
import userTypeBooksServices from "./userTypeBooks.services";
import operationsServices from "./operations.services";
import auditServices from "./audit.services";
import jobsServices from "./jobs.services";
import syncServices from "./sync.services";
const instance = axios.create({
  baseURL: config.apiBase.online,
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("refresh")
    ) {
      originalRequest._retry = true;
      const access_token = await onlineServices(instance).refreshToken();
      originalRequest.headers["Bearer"] = access_token;
      instance.defaults.headers["Bearer"] = access_token;
      return instance(originalRequest);
    }
    if (error.response?.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

const setToken = (jwt: string) => {
  instance.defaults.headers.common["Bearer"] = jwt;
};

const setRefreshToken = (refresh: string) => {
  instance.defaults.headers.common["refresh"] = refresh;
};
const api = {
  setToken: setToken,
  setRefreshToken: setRefreshToken,
  onlineServices: onlineServices(instance),
  accountServices: accountServices(instance),
  formulasServices: formulasServices(instance),
  booksServices: booksServices(instance),
  rolesServices: rolesServices(instance),
  baseFormulaServices: baseFormulaServices(instance),
  optionsServices: optionsServices(instance),
  rolOptionsServices: rolOptionsServices(instance),
  materialServices: materialServices(instance),
  materialTypeServices: materialTypesServices(instance),
  sapCustomerServices: sapCustomersServices(instance),
  userTypesServices: userTypesServices(instance),
  pigmentsFormula: pigmentsFormula(instance),
  colorsServices: colorsServices(instance),
  priceListServices: priceListServices(instance),
  subproductsTypes: subproductsTypes(instance),
  baseTypes: baseTypesServices(instance),
  rentabilidadServices: rentabilidadServices(instance),
  userTypeBooksServices: userTypeBooksServices(instance),
  operationsServices: operationsServices(instance),
  auditServices: auditServices(instance),
  jobsServices: jobsServices(instance),
  syncServices: syncServices(instance),
};
export default api;
