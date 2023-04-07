import { Routes, Route } from "react-router-dom";
import LogInPage from "./log-in/log-in.component";
import RegistrationPage from "./registration/registration.component";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/registration" element={< RegistrationPage/>} />
    </Routes>
  );
};

export default Routing;
