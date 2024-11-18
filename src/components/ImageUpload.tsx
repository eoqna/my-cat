import { useCallback, useState } from "react";
import { ModalLayout, Title, TitleLayout } from "../assets/css/login.css";
import useAppStore from "../store/useAppStore";
import CloseButton from "./CloseButton";
import styled from "styled-components";
import { color } from "../utils/colors";

const InputLayout = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 6px 8px;
  font-size: 2vmin;
  color: ${color.White};
  background: ${color.LightPink};
  border: 1px solid ${color.LightPink};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;

const Button = styled.p`
  width: 10%;
  padding: 6px 8px;
  font-size: 2vmin;
  color: ${color.White};
  background: ${color.Pink};
  border: 1px solid ${color.Pink};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;

const ImageUpload = () => {
  const { modal, openModal } = useAppStore();
  const [ img, setImg ] = useState("");

  const findImage = useCallback(() => {

  }, []);

  return (
    <ModalLayout>
      <CloseButton />
      <TitleLayout>
        <Title>{modal.title}</Title>
      </TitleLayout>
      <InputLayout>
        <Input 
          readOnly
          type="text"
          value={img}
          placeholder="아이디"
          onChange={(e) => setImg(e.target.value)}
          onClick={findImage} 
        />
        <Button >찾기</Button>
      </InputLayout>
      <Input 
          hidden
          type="file"
          onClick={findImage}
        />
    </ModalLayout>
  );
};

export default ImageUpload;