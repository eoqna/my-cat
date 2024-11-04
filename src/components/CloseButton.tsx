import { useCallback } from "react";
import useAppStore, { defaultModalState } from "../store/useAppStore";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { color } from "../utils/colors";

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
  const { openModal } = useAppStore();

  const onClose = useCallback(() => {
    openModal(defaultModalState);
  }, []);

  return (
    <Layout onClick={onClose}>
      <Icon path={mdiClose} size="2.4vmin" color={color.Black} />
    </Layout>
  );
};

export default CloseButton;