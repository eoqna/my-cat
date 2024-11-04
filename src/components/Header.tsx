import styled from "styled-components";
import { color } from "../utils/colors";
import { useCallback, useState } from "react";
import useDataStore from "../store/useDataStore";
import useAppStore from "../store/useAppStore";

const Layout = styled.header`
  width: calc(100% - 40px);
  height: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${color.Pink};
  border: 0 solid ${color.Pink};
  border-bottom-width: 1px;
  padding: 0px 20px;
`;

const EmptyLayout = styled.div``;

const LogoText = styled.p`
  font-size: 5vmin;
  font-weight: bold;
  color: ${color.White};
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.span`
  font-weight: bold;
  color: ${color.White};
  font-size: 3vmin;
  cursor: pointer;
`;

const Header = () => {
  const { openModal } = useAppStore();
  const { login, isLogin } = useDataStore();

  const onLogin = useCallback(() => {
    openModal({
      open: true,
      title: "로그인",
      type: "login",
    })
  }, []);

  const onLogout = useCallback(() => {
    isLogin(false);
  }, []);

  return (
    <Layout>
      <EmptyLayout></EmptyLayout>
      <LogoText>My Cat</LogoText>
      <LoginButton>
        {login 
          ? <ButtonText onClick={onLogout}>로그아웃</ButtonText>
          : <ButtonText onClick={onLogin}>로그인</ButtonText>
        }
      </LoginButton>
    </Layout>
  );
};

export default Header;