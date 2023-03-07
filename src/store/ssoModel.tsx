import { books } from "../constants/books";
import { userStateType } from "../types/reduxTypes";
const model = {
  state: {
    token: null,
    refreshToken: null,
    userProfile: {},
    menu: [],
    sucursales: [],
    sucursalSeleccionada: "",
    clientes: [],
    clienteSeleccionado: "",
    ableBooks: [books.PROPIOS],
    currentJob: {},
  },
  reducers: {
    setToken(state: userStateType, token: string | null) {
      return Object.assign({}, { ...state, token: token });
    },
    setRefreshToken(state: userStateType, refreshToken: string | null) {
      return Object.assign({}, { ...state, refreshToken: refreshToken });
    },
    logout(state: userStateType) {
      return { token: null, userProfile: {}, menu: [] };
    },
    setUser(
      state: userStateType,
      { token, userProfile, refreshToken }: userStateType
    ) {
      return Object.assign(
        {},
        {
          ...state,
          token: token,
          refreshToken: refreshToken,
          userProfile: userProfile,
        }
      );
    },
    setCurrentJob(state: userStateType, job) {
      return Object.assign(
        {},
        {
          ...state,
          currentJob: job,
        }
      );
    },

    setSucursales(state: userStateType, sucursales) {
      return Object.assign(
        {},
        {
          ...state,
          sucursales: sucursales,
        }
      );
    },
    setClientes(state: userStateType, clientes) {
      return Object.assign(
        {},
        {
          ...state,
          clientes: clientes,
        }
      );
    },
    changeClient(state: userStateType, cliente: string) {
      return Object.assign(
        {},
        {
          ...state,

          clienteSeleccionado: cliente,
        }
      );
    },
    changeSucursal(state: userStateType, sucursal: string) {
      return Object.assign(
        {},
        {
          ...state,

          sucursalSeleccionada: sucursal,
        }
      );
    },
    setAbleBooks(state: userStateType, books: []) {
      return Object.assign(
        {},
        {
          ...state,

          ableBooks: books,
        }
      );
    },
    setMenu(state: userStateType, menu: number[]) {
      return Object.assign({}, { ...state, menu: menu });
    },
  },
  effects: {},
};

export default model;
