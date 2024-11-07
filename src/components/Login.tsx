import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { color } from "../utils/colors";
import useDataStore from "../store/useDataStore";
import CloseButton from "./CloseButton";
import useAppStore from "../store/useAppStore";
import useModal from "../hooks/useModal";

const ModalLayout = styled.div`
  width: 25%;
  background: ${color.Pink};
  position: relative;
  padding: 30px;
  z-index: 1001;
  cursor: default;
  border: 1px solid ${color.Pink};
  border-radius: 10px;
`;

const TitleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.p`
  color: ${color.White};
  font-size: 4vmin;
  font-weight: bold;
`;

const LoginLayout = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ $margin?: boolean }>`
  padding: 6px 8px;
  font-size: 2vmin;
  color: ${color.White};
  background: ${color.LightPink};
  border: 1px solid ${color.LightPink};
  border-radius: 4px;
  outline: none;
  margin-bottom: ${({ $margin }) => $margin ? "24px" : "8px"};
  &::placeholder {
    color: ${color.White};
  }
`;

const Button = styled.p`
  width: 100%;
  font-size: 2.5vmin;
  font-weight: bold;
  background: ${color.LightPink};
  color: ${color.White};
  text-align: center;
  padding: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;
`;

const SubButtonLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubButton = styled.p`
  color: ${color.White};
  font-size: 1.8vmin;
  cursor: pointer;
`;

interface UserInfoProps {
  id: string;
  pw: string;
  pwck?: string;
};

const initUserInfo: UserInfoProps = {
  id: "",
  pw: "",
  pwck: "",
};

const Login = () => {
  const { isLogin, setUser } = useDataStore();
  const { closeModal } = useModal();
  const [ userInfo, setUserInfo ] = useState<UserInfoProps>(initUserInfo);
  const [ isJoin, setIsJoin ] = useState(false);
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const pwckRef = useRef<HTMLInputElement>(null);

  const validation = useCallback(() => {
    if (!isJoin && userInfo.id && userInfo.pw) {
      return true;
    }

    if (isJoin && userInfo.id && (userInfo.pwck === userInfo.pw)) {
      return true;
    }

    if (!userInfo.id) {
      idRef.current?.focus();
      alert("아이디를 입력해주세요");
      return false;
    }

    if (!userInfo.pw) {
      pwRef.current?.focus();
      alert("비밀번호를 입력해주세요");
      return false;
    }

    if (isJoin && !userInfo.pwck) {
      pwckRef.current?.focus();
      alert("비밀번호를 확인해주세요");
      return false;
    }

    if (isJoin && !(userInfo.pwck === userInfo.pw)) {
      pwckRef.current?.focus();
      alert("비밀번호 확인이 다릅니다");
      return false;
    }
  }, [userInfo]);

  const onLogin = useCallback(() => {
    const result = validation();

    if (!isJoin && result) {
      setUser({
        user_idx: 1,
        user_id: "admin",
        user_type: "manager",
        liked: [ 1, 3, ],
      });
      isLogin(true);
      closeModal();
    }

    if (isJoin && result) {
      alert("회원가입이 성공했습니다!\n로그인 후 이용해주세요");
      setUserInfo(initUserInfo);
      setIsJoin(false);
    }
  }, [userInfo]);

  const onClickJoin = useCallback(() => {
    setIsJoin(true);
  }, []);

  return (
    <ModalLayout>
      <CloseButton />
      <TitleLayout>
        <Title>{isJoin ? "회원가입" : "로그인"}</Title>
      </TitleLayout>
      <LoginLayout>
        <Input 
          ref={idRef}
          type="text"
          value={userInfo.id}
          placeholder="아이디"
          onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value })} 
        />
        <Input 
          $margin={!isJoin ? true : false}
          ref={pwRef}
          type="password"
          value={userInfo.pw}
          placeholder="비밀번호"
          onChange={(e) => setUserInfo({ ...userInfo, pw: e.target.value })} 
        />
        {isJoin &&
          <Input 
            $margin
            ref={pwckRef}
            type="password"
            value={userInfo.pwck}
            placeholder="비밀번호 확인"
            onChange={(e) => setUserInfo({ ...userInfo, pwck: e.target.value })} 
          />
        }
        <Button onClick={onLogin}>{isJoin ? "가입" : "로그인"}</Button>
      </LoginLayout>
      {!isJoin &&
        <SubButtonLayout>
          <SubButton>비밀번호 찾기</SubButton>
          <SubButton onClick={onClickJoin}>회원가입</SubButton>
        </SubButtonLayout>
      }
    </ModalLayout>
  );
};

export default Login;