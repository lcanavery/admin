import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import persistPlugin from "@rematch/persist";
import JobsAlert from "./components/jobs";
// scroll bar
import * as serviceWorker from "./serviceWorker";
import "./assets/third-party/simplebar.css";
import createRematchPersist from "@rematch/persist";
// third-party
import { Provider as ReduxProvider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
// apex-chart
import "./assets/third-party/apex-chart.css";
import "./index.css";
// project import
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";

import { init } from "@rematch/core";
import menu from "./store/reducers";
import * as models from "./store";
import storage from "redux-persist/lib/storage";

let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}

const configs = {
  storage: storage,
  key: "tintometrico",
};
declare global {
  interface Window {
    config: any;
  }
}
window.config = window.config || {};

export const store = init({
  models,
  redux: {
    devtoolOptions: {
      disabled: false, //process.env.REACT_APP_REDUX_DEVTOOLS_DISABLED === "true",
    },
    reducers: {
      menu: menu,
    },
    middlewares: [thunk],
  },
  //@ts-ignore
  plugins: [persistPlugin(configs)],
});

const persistor = getPersistor();

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter basename="/">
        <App />
        <JobsAlert open={true} />
      </HashRouter>
    </PersistGate>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
