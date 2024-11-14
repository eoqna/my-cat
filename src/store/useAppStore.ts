import { create } from "zustand";
import { Types } from "../@types";

type ModalType = "" | "comment" | "login" | "find";

interface ModalState {
  open: boolean;
  type: ModalType;
  title: string;
  img?: string;
  comments?: Types.Comment[];
  onConfirm?: () => void;
  onClose?: () => void;
};

interface DataState {
  modal: ModalState;
  openModal: (data: ModalState) => void;
};

export const defaultModalState: ModalState = {
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