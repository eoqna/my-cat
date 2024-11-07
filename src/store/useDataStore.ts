import { create } from "zustand";
import { Types } from "../@types";

interface DataState {
  login: boolean;
  isLogin: (data: boolean) => void;
  user: Types.User;
  setUser: (data: Types.User) => void;
};

const initUser: Types.User = {
  user_idx: 0,
  user_id: "",
  user_type: "",
  liked: [],
}

const useDataStore = create<DataState>()((set) => ({
  login: false,
  isLogin: (data) => set({ login: data }),
  user: initUser,
  setUser: (data) => set({ user: data }),
}));

export default useDataStore;