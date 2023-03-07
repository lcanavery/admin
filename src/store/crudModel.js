import { fetch } from "./dataAccess";
import nameToUrls from "./nameToUrls";
import _ from "lodash";
const initialState = {
  error: null,
  loading: false,
  retrieved: null,
  edit: false,
};
export const makeModel = (name) => {
  const data = {
    name: name,
    state: {
      create: initialState,
      list: initialState,
      del: initialState,
      show: initialState,
      update: initialState,
      options: initialState,
      filter: "",
    },
    reducers: {
      setCreateError(state, error) {
        return Object.assign(
          {},
          { ...state, create: { ...state.create, error } }
        );
      },
      setCreateLoading(state, loading) {
        return Object.assign(
          {},
          { ...state, create: { ...state.create, loading } }
        );
      },
      setCreated(state, retrieved) {
        return Object.assign(
          {},
          { ...state, create: { ...state.create, retrieved } }
        );
      },
      createReset(state) {
        return Object.assign({}, { ...state, create: initialState });
      },
      setListError(state, error) {
        return Object.assign({}, { ...state, list: { ...state.list, error } });
      },
      setListLoading(state, loading) {
        return Object.assign(
          {},
          { ...state, list: { ...state.list, loading } }
        );
      },
      setListed(state, retrieved) {
        return Object.assign(
          {},
          { ...state, list: { ...state.list, retrieved } }
        );
      },
      listReset(state) {
        return Object.assign({}, { ...state, list: initialState });
      },
      setDeleteError(state, error) {
        return Object.assign({}, { ...state, del: { ...state.del, error } });
      },
      setDeleteLoading(state, loading) {
        return Object.assign({}, { ...state, del: { ...state.del, loading } });
      },
      setDeleted(state, retrieved) {
        return Object.assign(
          {},
          { ...state, del: { ...state.del, retrieved } }
        );
      },
      deleteReset(state) {
        return Object.assign({}, { ...state, del: initialState });
      },
      setShowError(state, error) {
        return Object.assign({}, { ...state, show: { ...state.show, error } });
      },
      setShowLoading(state, loading) {
        return Object.assign(
          {},
          { ...state, show: { ...state.show, loading } }
        );
      },
      setShowed(state, retrieved) {
        return Object.assign(
          {},
          { ...state, show: { ...state.show, retrieved } }
        );
      },
      showReset(state) {
        return Object.assign({}, { ...state, show: initialState });
      },
      setUpdateError(state, error) {
        return Object.assign(
          {},
          { ...state, update: { ...state.update, error } }
        );
      },
      setUpdateLoading(state, loading) {
        return Object.assign(
          {},
          { ...state, update: { ...state.update, loading } }
        );
      },
      setUpdated(state, retrieved) {
        return Object.assign(
          {},
          { ...state, update: { ...state.update, retrieved } }
        );
      },
      setUpdateEdit(state, edit) {
        return Object.assign(
          {},
          { ...state, update: { ...state.update, edit } }
        );
      },
      updateReset(state) {
        return Object.assign({}, { ...state, update: initialState });
      },
      setOptionsError(state, error) {
        return Object.assign(
          {},
          { ...state, options: { ...state.options, error } }
        );
      },
      setOptionsLoading(state, loading) {
        return Object.assign(
          {},
          { ...state, options: { ...state.options, loading } }
        );
      },
      setOptions(state, retrieved) {
        return Object.assign(
          {},
          { ...state, options: { ...state.options, retrieved } }
        );
      },
      optionsReset(state) {
        return Object.assign({}, { ...state, options: initialState });
      },

      setFilter(state, filter) {
        return Object.assign({}, { ...state, filter: filter });
      },
    },
    effects: (dispatch) => ({
      async list(payload, state) {
        return new Promise((resolve, reject) => {
          this.setListLoading(true);
          this.setListError(null);

          let url = nameToUrls[name];

          if (payload !== undefined && payload.url !== undefined)
            url += payload.url;

          fetch(url)
            .then((response) => response.json())
            .then((retrieved) => {
              this.setListLoading(false);

              this.setListed(retrieved);
              resolve(retrieved);
            })
            .catch((e) => {
              this.setListLoading(false);
              this.setListError(e.message);
              reject(e.message);
            });
        });
      },
      options(payload, state) {
        return new Promise((resolve, reject) => {
          this.setOptionsLoading(true);
          this.setOptionsError(null);
          const endpoint = payload?.endpoint ? payload.endpoint : "options";
          //
          fetch(nameToUrls[name] + endpoint)
            .then((response) => response.json())
            .then((retrieved) => {
              this.setOptionsLoading(false);
              const sortedArray = _.sortBy(retrieved, ["label"]);
              this.setOptions(sortedArray);
              resolve(sortedArray);
            })
            .catch((e) => {
              this.setOptionsLoading(false);
              this.setOptionsError(e.message);
              reject();
            });
        });
      },
      show(payload, state) {
        return new Promise((resolve, reject) => {
          this.setShowLoading(true);
          this.setShowError(null);
          let url = nameToUrls[name] + payload.id;
          if (payload !== undefined && payload.url !== undefined)
            url += payload.url;

          fetch(url)
            .then((response) => response.json())
            .then((retrieved) => {
              if (payload.archivoDetalle && retrieved.detalle) {
                for (let i = 0; i < retrieved.detalle.length; i++) {
                  retrieved.detalle[i].arNombre = retrieved.arNombre;
                }
              }
              this.setShowLoading(false);
              this.setShowed(retrieved);
              resolve(retrieved);
            })
            .catch((e) => {
              this.setShowLoading(false);
              this.setShowError(e.message);
              reject(e.message);
            });
        });
      },
      create(payload, state) {
        //
        // if (payload.parentEntity) {
        //   // dispatch[payload.parentEntity].updateReset();
        //   // dispatch[payload.parentEntity].createReset();
        // }
        return new Promise((resolve, reject) => {
          this.setCreateLoading(true);
          if (payload.parentEntity)
            dispatch[payload.parentEntity].setShowLoading(true);

          this.setCreateError(null);

          fetch(nameToUrls[name], {
            method: "POST",
            body: JSON.stringify(payload.values),
          })
            .then((response) => {
              this.setCreateLoading(false);
              response.json().then((retrieved) => {
                this.setCreated(retrieved);
                resolve(retrieved);
              });
              if (payload.parentEntity) {
                dispatch[payload.parentEntity].setShowLoading(false);
              }
            })
            .catch((e) => {
              this.setCreateLoading(false);
              this.setCreateError(e.message);
              if (payload.parentEntity) {
                dispatch[payload.parentEntity].setShowLoading(false);
                // dispatch[payload.parentEntity].setCreateError(e.message);
                // dispatch[payload.parentEntity].setUpdateError(e.message);
              }
              reject(e.message);
            });
        });
      },
      update(payload, state) {
        // if (payload.parentEntity) {
        //   dispatch[payload.parentEntity].updateReset();
        //   dispatch[payload.parentEntity].createReset();
        // }
        return new Promise((resolve, reject) => {
          this.setUpdateLoading(true);
          if (payload.parentEntity)
            dispatch[payload.parentEntity].setShowLoading(true);

          this.setUpdateError(null);

          fetch(nameToUrls[name] + payload.item.id, {
            method: "PUT",
            body: JSON.stringify(payload.values),
          })
            .then((response) => {
              this.setUpdateLoading(false);
              response
                .json()
                .then((retrieved) => {
                  if (payload.parentEntity)
                    dispatch[payload.parentEntity].setShowLoading(false);
                  this.setUpdated(retrieved);
                  resolve(retrieved);
                })
                .catch(() => {
                  if (payload.parentEntity)
                    dispatch[payload.parentEntity].setShowLoading(false);
                  this.setUpdated({ ...payload.item, item: "no item" });
                });
            })

            .catch((e) => {
              this.setUpdateLoading(false);
              this.setUpdateError(e.message);
              if (payload.parentEntity) {
                dispatch[payload.parentEntity].setShowLoading(false);
                // dispatch[payload.parentEntity].setCreateError(e.message);
                // dispatch[payload.parentEntity].setUpdateError(e.message);
              }
              // if (payload.parentEntity) {
              //   dispatch[payload.parentEntity].setShowLoading(false);
              //   dispatch[payload.parentEntity].setCreateError(e.message);
              //   dispatch[payload.parentEntity].setUpdateError(e.message);
              // }
              reject(e.message);
            });
        });
      },
      patch({ id, parentEntity, valoresAModificar }) {
        return new Promise((resolve, reject) => {
          this.setUpdateLoading(true);
          if (parentEntity) dispatch[parentEntity].setShowLoading(true);

          this.setUpdateError(null);

          fetch(nameToUrls[name] + id, {
            method: "PATCH",
            body: JSON.stringify(valoresAModificar),
          })
            .then((response) => {
              this.setUpdateLoading(false);
              response
                .json()
                .then((retrieved) => {
                  if (parentEntity) {
                    dispatch[parentEntity].setShowLoading(false);
                  }
                  this.setUpdated(retrieved);
                  resolve(retrieved);
                })
                .catch((e) => {
                  this.setUpdated({});
                });
            })
            .catch((e) => {
              this.setUpdateLoading(false);
              this.setUpdateError(e.message);
              if (parentEntity) {
                dispatch[parentEntity].setShowLoading(false);
              }

              reject(e.message);
            });
        });
      },
      async delete(payload, state) {
        return new Promise((resolve, reject) => {
          this.setDeleteLoading(true);
          if (payload.parentEntity)
            dispatch[payload.parentEntity].setShowLoading(true);

          this.setDeleteError(null);

          fetch(nameToUrls[name] + payload.item.id, {
            method: "DELETE",
          })
            .then((response) => {
              this.setDeleteLoading(false);
              this.setDeleted(payload.item);
              if (payload.parentEntity)
                dispatch[payload.parentEntity].setShowLoading(false);
              resolve(payload.item);
            })
            .catch((e) => {
              this.setDeleteLoading(false);
              this.setDeleteError(e.message);
              if (payload.parentEntity)
                dispatch[payload.parentEntity].setShowLoading(false);
              reject(e.message);
            });
        });
      },
      optionsInput(id, payload, url, state) {
        return new Promise((resolve, reject) => {
          this.setOptionsLoading(true);
          this.setOptionsError(null);
          const endpoint = "options";
          fetch(url.preUrl + id + url.postUrl + endpoint)
            .then((response) => response.json())
            .then((retrieved) => {
              this.setOptionsLoading(false);
              const sortedArray = _.sortBy(retrieved, ["label"]);
              this.setOptions(sortedArray);
              resolve(sortedArray);
            })
            .catch((e) => {
              this.setOptionsLoading(false);
              this.setOptionsError(e.message);
              reject();
            });
        });
      },
    }),
  };
  return data;
};
