import styled from "styled-components";
import { color } from "../utils/colors";
import { ChangeEvent, useCallback, useState } from "react";
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
  ${({ $margin }) => $margin && "margin-right: 4px;"}
`;

const SelectComment = styled.select`
  width: 80%;
  padding: 4px 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;  

const SelectOption = styled.option``;

const CommentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
`;

const CommentText = styled.span<{ $name?: boolean }>`
  font-size: 2vmin;
  color: ${({ $name }) => $name ? color.Gray : color.Black};
  ${({ $name }) => $name && "margin-right: 4px;"}
`;

const Modal = () => {
  const { modal, openModal } = useAppStore();
  const [ show, setShow ] = useState(false);
  const [ comment, setComment ] = useState("퍼가요~❤️");

  const onClose = useCallback(() => {
    openModal(defaultModalState);
  }, []);

  const onPressComment = useCallback(() => {
    setShow(true);
  }, []);

  const onSelectComment = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setComment(e.target.value);
  }, []);

  const onPressAddComment = useCallback(() => {
    setShow(false);
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
        {show ? (
          <MenuLayout $show>
            <SelectComment value={comment} onChange={(e) => onSelectComment(e)}>
              <SelectOption value="퍼가요~❤️">퍼가요~❤️</SelectOption>
              <SelectOption value="내꾸얌>_<">내꾸얌</SelectOption>
            </SelectComment>
            <ButtonLayout>
              <Button $margin onClick={onPressAddComment}>확인</Button>
              <Button onClick={onPressAddComment}>취소</Button>
            </ButtonLayout>
          </MenuLayout>
        ) : (
          <MenuLayout>
            <Button onClick={onPressComment}>댓글달기</Button>
          </MenuLayout>
        )}
        <CommentLayout>
          {!modal.comments?.length && 
            <Comment>
              <CommentText>등록된 댓글이 없습니다</CommentText>
            </Comment>
          }
          {modal.comments?.map((comment) => (
            <Comment key={comment.id}>
              <CommentText $name>{comment.nickname}</CommentText>
              <CommentText>{comment.comment}</CommentText>
            </Comment>
          ))}
        </CommentLayout>
      </ModalLayout>
    </Background>
  );
};

export default Modal;