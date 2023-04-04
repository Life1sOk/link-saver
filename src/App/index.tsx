// React router Provider
import { BrowserRouter } from "react-router-dom";
import Routing from "../pages";

// Redux toolkit
import { Provider } from "react-redux";
import { store } from "./store";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
