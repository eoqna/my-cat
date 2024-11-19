import { ChangeEvent, useCallback, useRef, useState } from "react";
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

  &::placeholder {
    color: ${color.White};
  }
`;

const Button = styled.p`
  width: 10%;
  height: 100%;
  padding: 6px 8px;
  font-size: 2vmin;
  color: ${color.White};
  background: ${color.LightPink};
  border: 1px solid ${color.LightPink};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  border: 1px solid ${color.LightPink};
  margin-bottom: 10px;
`;

const ImageUpload = () => {
  const { modal, openModal } = useAppStore();
  const [ img, setImg ] = useState("");
  const [ preview, setPreview ] = useState<string | ArrayBuffer | null>();
  const imgRef = useRef<HTMLInputElement>(null);

  const findImage = useCallback(() => {
    imgRef.current?.click();
  }, []);
  
  const changeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) {
      setImg(e.target.files[0].name);

      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  }, []);

  return (
    <ModalLayout>
      <CloseButton />
      <TitleLayout>
        <Title>{modal.title}</Title>
      </TitleLayout>
      {preview &&
        <Img 
          src={preview.toString()}
          alt="미리보기 이미지"
        />
      }
      <InputLayout>
        <Input 
          readOnly
          type="text"
          value={img}
          placeholder="이미지 파일을 업로드 해주세요"
          onChange={(e) => setImg(e.target.value)}
          onClick={findImage} 
        />
        <Button onClick={findImage}>찾기</Button>
      </InputLayout>
      <Input 
        hidden
        ref={imgRef}
        type="file"
        accept = "image/*"
        onClick={findImage}
        onChange={(e) => changeImage(e)}
      />
    </ModalLayout>
  );
};

export default ImageUpload;