import styled from "styled-components";
import { color } from "../utils/colors";
import { useCallback, useRef, useState } from "react";
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

const SignIn = () => {
  const { modal } = useAppStore();
  const { isLogin } = useDataStore();
  const { closeModal } = useModal();
  const [ id, setId ] = useState("");
  const [ pw, setPw ] = useState("");
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const validation = useCallback(() => {
    if (id && pw) {
      return true;
    }

    if (!id) {
      idRef.current?.focus();
      alert("아이디를 입력해주세요");
      return false;
    }

    if (!pw) {
      pwRef.current?.focus();
      alert("비밀번호를 입력해주세요");
      return false;
    }
  }, [id, pw]);

  const onLogin = useCallback(() => {
    const result = validation();

    if (result) {
      isLogin(true);
      closeModal();
    }
  }, [id, pw]);

  return (
    <ModalLayout>
      <CloseButton />
      <TitleLayout>
        <Title>{modal.title}</Title>
      </TitleLayout>
      <LoginLayout>
        <Input 
          ref={idRef}
          type="text"
          value={id}
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)} 
        />
        <Input 
          $margin
          ref={pwRef}
          type="password"
          value={pw}
          placeholder="비밀번호"
          onChange={(e) => setPw(e.target.value)} 
        />
        <Button onClick={onLogin}>로그인</Button>
      </LoginLayout>
      <SubButtonLayout>
        <SubButton>비밀번호 찾기</SubButton>
        <SubButton>회원가입</SubButton>
      </SubButtonLayout>
    </ModalLayout>
  );
};

export default SignIn;