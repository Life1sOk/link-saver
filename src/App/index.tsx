// React router Provider
import { HashRouter, BrowserRouter } from "react-router-dom";
import Routing from "../pages";

// Redux toolkit
import { Provider } from "react-redux";
import { store } from "./store/store";

// Theme
import CustomTheme from "./wrappers/custom-wrapper";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <CustomTheme>
          <Routing />
        </CustomTheme>
      </HashRouter>
    </Provider>
  );
}

export default App;
