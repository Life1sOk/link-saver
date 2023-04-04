import { Routes, Route } from "react-router-dom";

import RegistrationPage from "./registration/registration.page";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />}></Route>
    </Routes>
  );
};

export default Routing;
