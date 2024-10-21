import { create } from "zustand";

type ModalType = "" | "alert" | "confirm";

interface ModalState {
  open: boolean;
  type: ModalType;
  title: string;
  content?: () => React.ReactNode;
  onConfirm: () => void;
  onClose: () => void;
};

interface DataState {
  modal: ModalState;
  openModal: (data: ModalState) => void;
};

const defaultModalState: ModalState = {
  open: false,
  type: "",
  title: "",
  onConfirm: () => {},
  onClose: () => {},
};

const useAppStore = create<DataState>()((set) => ({
  modal: defaultModalState,
  openModal: (data) => set({ modal: data }),
}));

export default useAppStore;