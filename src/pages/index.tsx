import { Routes, Route } from "react-router-dom";

import RegistrationPage from "./registration/registration.page";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
    </Routes>
  );
};

export default Routing;
