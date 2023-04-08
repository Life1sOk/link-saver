import { Routes, Route } from "react-router-dom";

import SigninPage from "./signin/signin.page";
import MainPage from "./main/main.page";

import { PageWrapper } from "./index.style";

const Routing = () => {
  return (
    <PageWrapper>
      <Routes>
        <Route index element={<SigninPage />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </PageWrapper>
  );
};

export default Routing;
