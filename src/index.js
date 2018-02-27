import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";

import snapshot from "./snapshot";
import "./index.css";

const production = process.env.NODE_ENV === "production";

const LoadableApp = Loadable({
  loader: () => import("./App"),
  loading: () => <div>Loading…</div>,
});

const LoadableComments = Loadable({
  loader: () => import("./Comments"),
  loading: () => <div>Loading…</div>,
});

if (snapshot || !production) {
  const el = document.getElementById("root");
  ReactDOM.render(<LoadableApp />, el);
} else {
  const el = document.getElementById("comments-root");
  if (el) ReactDOM.render(<LoadableComments gist={el.dataset.gist} />, el);
}
