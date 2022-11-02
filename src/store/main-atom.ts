import { atom } from 'jotai';
interface MainState {
  facebook: string;
  linkedin: string;
  twitter: string;
  github: string;
  stackoverflow: string;
  address: string;
  mail: string;
}
export const mainAtom = atom<MainState>({
  linkedin: 'https://www.linkedin.com/in/shamim42/',
  facebook: 'https://www.facebook.com/',
  github: 'https://github.com/shamim-42',
  twitter: 'https://twitter.com/',
  stackoverflow: 'https://stackoverflow.com/',
  mail: 'example@gmail.com',
  address: 'Mirpur, Dhaka, Bangladesh',
});
