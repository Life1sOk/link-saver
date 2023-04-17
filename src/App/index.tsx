// React router Provider
import { HashRouter } from "react-router-dom";
import Routing from "../pages";

// Redux toolkit
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routing />
      </HashRouter>
    </Provider>
  );
}

export default App;
