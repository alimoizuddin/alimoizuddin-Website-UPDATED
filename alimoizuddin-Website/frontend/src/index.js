import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

const rootElement = document.getElementById("root");

// react-snap prerenders static HTML at build time. When that HTML is present,
// hydrate it (keeps content crawlable + avoids a flash); otherwise render fresh.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
