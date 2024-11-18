import { useCallback, useRef, useState } from "react";
import useDataStore from "../store/useDataStore";
import CloseButton from "./CloseButton";
import useModal from "../hooks/useModal";
import useAppStore from "../store/useAppStore";
import { Button, Input, InputLayout, ModalLayout, SubButton, SubButtonLayout, Title, TitleLayout } from "../assets/css/login.css";

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
  const { openModal } = useAppStore();
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

  const onClickFindPassword = useCallback(() => {
    openModal({
      open: true,
      title: "비밀번호 찾기",
      type: "find",
    });
  }, []);

  return (
    <ModalLayout>
      <CloseButton />
      <TitleLayout>
        <Title>{isJoin ? "회원가입" : "로그인"}</Title>
      </TitleLayout>
      <InputLayout>
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
      </InputLayout>
      {!isJoin &&
        <SubButtonLayout>
          <SubButton onClick={onClickFindPassword}>비밀번호 찾기</SubButton>
          <SubButton onClick={onClickJoin}>회원가입</SubButton>
        </SubButtonLayout>
      }
    </ModalLayout>
  );
};

export default Login;