import { Types } from "../@types";
import img1 from "../assets/imgs/cat1.png";

export type Comments = "퍼가요~❤️" | "내꾸얌>_<" | "";

export const cats: Types.Cat[] = [
  {
    idx: 0,
    name: "야옹이",
    instagram: "yaong2",
    like: 23,
    path: img1,
    comment: [
      {
        id: 0,
        nickname: "cloudia94",
        comment: "퍼가요~❤️",
        create: "2024-10-25 10:00",
      },
      {
        id: 1,
        nickname: "eoqna",
        comment: "내꾸얌>_<",
        create: "2024-10-25 10:02",
      },
    ],
  },
  {
    idx: 1,
    name: "보리",
    instagram: "__boryy",
    like: 13,
    path: img1,
    comment: [],
  },
  {
    idx: 2,
    name: "냥냥",
    instagram: "nyangx2",
    like: 21,
    path: img1,
    comment: [],
  },
  {
    idx: 3,
    name: "감자",
    instagram: "cattato",
    like: 3,
    path: img1,
    comment: [],
  },
];