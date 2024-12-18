// atoms.js
import { atom } from "recoil";
export const token = atom<string>({
  key: "token",
  default: "",
});
