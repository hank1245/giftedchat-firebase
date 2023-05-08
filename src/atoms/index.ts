import { atom } from 'recoil';

interface User {
  name: string | undefined;
  email: string | undefined;
}

export const authState = atom<User>({
  key: 'authState',
  default: {
    name: undefined,
    email: undefined,
  },
});
