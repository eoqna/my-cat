import styled from "styled-components";
import { color } from "../utils/colors";
import { useCallback } from "react";
import useAppStore, { defaultModalState } from "../store/useAppStore";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: not-allowed;
`;

const ModalLayout = styled.div`
  width: 25%;
  background: ${color.White};
  position: relative;
  padding: 30px;
  z-index: 1001;
  cursor: default;
  border: 1px solid ${color.Black};
`;

const CloseButton = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 2px;
  right: 2px;
  z-index: 1002;
`;

const ImgLayout = styled.div`
  display: flex;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

const CommentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
`;

const CommentText = styled.span<{ name?: boolean }>`
  font-size: 2vmin;
  color: ${({ name }) => name ? color.Gray : color.Black};
  ${({ name }) => name && "margin-right: 4px;"}
`;

const Modal = () => {
  const { modal, openModal } = useAppStore();

  const onClose = useCallback(() => {
    openModal(defaultModalState);
  }, []);

  return (
    <Background>
      <ModalLayout>
        <CloseButton onClick={onClose}>
          <Icon path={mdiClose} size="2.4vmin" color={color.Black} />
        </CloseButton>
        <ImgLayout>
          <Img alt={modal.title} src={modal.img} />
        </ImgLayout>
        <CommentLayout>
          {!modal.comments?.length && 
            <Comment>
              <CommentText>등록된 댓글이 없습니다</CommentText>
            </Comment>
          }
          {modal.comments?.map((comment) => (
            <Comment key={comment.id}>
              <CommentText name>{comment.nickname}</CommentText>
              <CommentText>{comment.comment}</CommentText>
            </Comment>
          ))}
        </CommentLayout>
      </ModalLayout>
    </Background>
  );
};

export default Modal;