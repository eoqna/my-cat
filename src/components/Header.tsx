import styled from "styled-components";
import { color } from "../utils/colors";
import { useCallback } from "react";
import useDataStore from "../store/useDataStore";
import useAppStore from "../store/useAppStore";
import { NavigationProps } from "../navigation";

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
  cursor: pointer;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.span<{ $margin?: boolean }>`
  font-weight: bold;
  color: ${color.White};
  font-size: 3vmin;
  cursor: pointer;
  ${({ $margin }) => $margin && "margin-right: 8px;"}
`;

const Header = ({ navigation }: NavigationProps) => {
  const { openModal } = useAppStore();
  const { login, isLogin, user } = useDataStore();

  const onLogin = useCallback(() => {
    openModal({
      open: true,
      title: "로그인",
      type: "login",
    });
  }, []);

  const addImage = useCallback(() => {
    openModal({
      open: true,
      title: "이미지 등록",
      type: "image",
    });
  }, []);

  const onLogout = useCallback(() => {
    isLogin(false);
  }, []);

  const onClickLogo = useCallback(() => {
    navigation("/");
  }, []);

  return (
    <Layout>
      <EmptyLayout></EmptyLayout>
      <LogoText onClick={onClickLogo}>My Cat</LogoText>
      <LoginButton>
        {(login && user.user_type === "manager") &&
          <ButtonText $margin onClick={addImage}>등록</ButtonText>
        }
        {login 
          ? <ButtonText onClick={onLogout}>로그아웃</ButtonText>
          : <ButtonText onClick={onLogin}>로그인</ButtonText>
        }
      </LoginButton>
    </Layout>
  );
};

export default Header;