// React router Provider
import { HashRouter } from "react-router-dom";
import Routing from "../pages";

// Redux toolkit
import { Provider } from "react-redux";
import { store } from "./store/store";

// Theme styled components;
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  );
}

export default App;
