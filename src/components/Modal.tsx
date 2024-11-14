import styled from "styled-components";
import useAppStore from "../store/useAppStore";
import Detail from "./Detail";
import Login from "./Login";
import FindPassword from "./FindPassword";

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
  const { modal } = useAppStore();

  return (
    <Background>
      {modal.type === "comment" && <Detail />}
      {modal.type === "login" && <Login />}
      {modal.type === "find" && <FindPassword />}
    </Background>
  );
};

export default Modal;