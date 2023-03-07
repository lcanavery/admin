import { store } from "../index";
import config from "../config";
const ENTRYPOINT = config.apiBase.online;
const MIME_TYPE = "application/json";

export function fetch(id, options = {}) {
    if ("undefined" === typeof options.headers) options.headers = new Headers();
    if (null === options.headers.get("Accept"))
        options.headers.set("Accept", MIME_TYPE);

    if (
        "undefined" !== options.body &&
        !(options.body instanceof FormData) &&
        null === options.headers.get("Content-Type")
    )
        options.headers.set("Content-Type", MIME_TYPE);
    options.headers.set("Bearer", store.getState().sso.token);

    return global.fetch(new URL(id, ENTRYPOINT), options).then((response) => {
        if (response.ok) return response;

        if (response.status === 401) {
            localStorage.clear();
            window.location.reload();
        }

        return response.json().then(
            (json) => {
                throw new Error(
                    `${json.error.statusCode} - ${json.error.name} - ${json.error.message}`
                );
            },
            () => {
                throw new Error(`An error has occured`);
            }
        );
    });
}