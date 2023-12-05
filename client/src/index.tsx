import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import Routes from "./routes";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
