import { BrowserRouter } from "react-router-dom";

import Routing from "../pages";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
