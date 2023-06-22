import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../App/store/hooks";
import { useAuthorisationLogic } from "../utils/contollers/useAuthorisationLogic";

import { useWebsocket } from "../utils/contollers/useConnectSocket";

import { Routes, Route } from "react-router-dom";

import SigninPage from "./signin/signin.page";
import MainPage from "./main/main.page";

import { PageWrapper, GlobalStyle } from "./index.style";

const Routing = () => {
  const dispatch = useAppDispatch();
  const usersSession = useAppSelector((state) => state.user.session);

  // Отправка запроса на сервер
  const { loginUserByToken } = useAuthorisationLogic();

  useWebsocket();

  useEffect(() => {
    const activeToken = window.sessionStorage.getItem("token");

    if (activeToken && !usersSession.success) {
      (async () => {
        await loginUserByToken(activeToken);
      })();
    }
  }, [usersSession, dispatch]);

  return (
    <PageWrapper>
      <GlobalStyle />
      <Routes>
        <Route index element={<SigninPage />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </PageWrapper>
  );
};

export default Routing;
