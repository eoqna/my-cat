import { useCallback, useRef, useState } from "react";
import CloseButton from "./CloseButton";
import useAppStore from "../store/useAppStore";
import { 
  Button,
  Input, InputLayout, 
  ModalLayout, Title, TitleLayout } from "../assets/css/login.css";

const FindPassword = () => {
  const { modal, openModal } = useAppStore();
  const [ id, setId ] = useState("");
  const idRef = useRef<HTMLInputElement>(null);

  const onFindPassword = useCallback(() => {
    if (!id) {
      alert("아이디를 입력해 주세요");
      idRef.current?.focus();
      return;
    }

    openModal({
      open: true,
      title: "로그인",
      type: "login",
    });
  }, [id]);

  return (
    <ModalLayout>
      <CloseButton />
      <TitleLayout>
        <Title>{modal.title}</Title>
      </TitleLayout>
      <InputLayout>
        <Input 
          $margin
          ref={idRef}
          type="text"
          value={id}
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)} 
        />
        <Button onClick={onFindPassword}>비밀번호 찾기</Button>
      </InputLayout>
    </ModalLayout>
  );
};

export default FindPassword;