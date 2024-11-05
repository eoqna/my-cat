import { useCallback } from "react";
import useAppStore, { defaultModalState } from "../store/useAppStore";

const useModal = () => {
  const { openModal } = useAppStore();

  const closeModal = useCallback(() => {
    openModal(defaultModalState);
  }, []);

  return {
    closeModal,
  }
};

export default useModal;