import { Comments } from "../costants";

declare namespace Types {
  interface User {
    user_idx: number;
    user_id: string;
    user_type: "manager" | "user" | "";
    liked: number[];
  }

  interface Cat {
    idx: number;
    name: string;
    instagram: string;
    like: number;
    path: string;
    comment: Comment[];
  }

  interface Comment {
    id: number;
    nickname: string;
    comment: Comments;
    create: string;
  }

  interface ModalProps {
    onClose: () => void;
  };
}