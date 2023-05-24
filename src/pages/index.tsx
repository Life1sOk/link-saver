import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../App/store/hooks";
import { usersSessionStoreByToken } from "../App/store/slices/user.slice";
import { useLoginByTokenMutation } from "../App/store/api/user";

import { Routes, Route } from "react-router-dom";

import SigninPage from "./signin/signin.page";
import MainPage from "./main/main.page";
import GandalfWall from "./gandalf/gandalf.page";

import { PageWrapper, GlobalStyle } from "./index.style";

const Routing = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.profile);
  const usersSession = useAppSelector((state) => state.user.session);

  // Отправка запроса на сервер
  const [loginByTokenAPI] = useLoginByTokenMutation();

  useEffect(() => {
    const activeToken = window.sessionStorage.getItem("token");

    if (activeToken && !usersSession.success) {
      const loginUserByToken = async () => {
        await loginByTokenAPI({ token: activeToken })
          .unwrap()
          .then((response) => {
            dispatch(usersSessionStoreByToken({ token: activeToken, response }));
          });
      };

      loginUserByToken();
    }
  }, [usersSession, loginByTokenAPI, dispatch]);

  useEffect(() => {
    const activeToken = window.sessionStorage.getItem("token");

    if (activeToken && usersSession.success) {
      navigate("/main");
    } else {
      navigate("/");
    }
  }, [usersSession, navigate, user.id]);

  return (
    <PageWrapper>
      <GlobalStyle />
      <Routes>
        <Route index element={<SigninPage />} />
        <Route
          path="main"
          element={usersSession?.success ? <MainPage /> : <GandalfWall />}
        />
      </Routes>
    </PageWrapper>
  );
};

export default Routing;
