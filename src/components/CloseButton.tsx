import { useCallback } from "react";
import useAppStore, { defaultModalState } from "../store/useAppStore";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { color } from "../utils/colors";
import useModal from "../hooks/useModal";

const Layout = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 2px;
  right: 2px;
  z-index: 1002;
`;

const CloseButton = () => {
  const { modal } = useAppStore();
  const { closeModal } = useModal();

  return (
    <Layout onClick={closeModal}>
      <Icon path={mdiClose} size="3vmin" color={modal.type === "comment" ? color.Black : color.White} />
    </Layout>
  );
};

export default CloseButton;