import { Routes, Route } from "react-router-dom";

import SigninPage from "./signin/signin.page";

const Routing = () => {
  return (
    <Routes>
      <Route index element={<SigninPage />} />
    </Routes>
  );
};

export default Routing;
