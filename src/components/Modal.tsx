import styled from "styled-components";
import useAppStore from "../store/useAppStore";
import Detail from "./Detail";
import SignIn from "./SignIn";

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

const Modal = () => {
  const { modal, openModal } = useAppStore();

  return (
    <Background>
      {modal.type === "comment" && <Detail />}
      {modal.type === "login" && <SignIn />}
    </Background>
  );
};

export default Modal;