import styled from "styled-components";
import { color } from "../utils/colors";
import { useCallback, useState } from "react";
import useDataStore from "../store/useDataStore";
import CloseButton from "./CloseButton";

const ModalLayout = styled.div`
  width: 25%;
  background: ${color.White};
  position: relative;
  padding: 30px;
  z-index: 1001;
  cursor: default;
  border: 1px solid ${color.Black};
`;

const ImgLayout = styled.div`
  display: flex;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

const MenuLayout = styled.div<{ $show?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ $show }) => $show ? "space-between" : "flex-start"};
  align-items: center;
  padding: 10px 0;
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;  

const Button = styled.p<{ $margin?: boolean }>`
  background: ${color.White};
  font-size: 2vmin;
  color: ${color.Pink};
  border: 0;
  cursor: pointer;
  ${({ $margin }) => $margin && "margin-right: 8px;"}
`;

const SignIn = () => {
  const { isLogin } = useDataStore();
  const [ id, setId ] = useState("");
  const [ pw, setPw ] = useState("");

  const onLogin = useCallback(() => {
    if (!id || !pw) {
      alert("아이디 또는 비밀번호를 입력해주세요");
      return;
    }

    isLogin(true);
  }, [id, pw]);

  return (
    <ModalLayout>
      <CloseButton />
    </ModalLayout>
  );
};

export default SignIn;