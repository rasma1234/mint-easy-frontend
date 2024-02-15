import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

/*
main component of the application basically hosting the App component
*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
