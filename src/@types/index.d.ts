import { Comments } from "../costants";

declare namespace Types {
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
}