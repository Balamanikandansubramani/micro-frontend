import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(
    <div>
      <App />
    </div>,
    el
  );

};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing_dev_root');

  if (el) {
    mount(el);
  }
}

export { mount };
