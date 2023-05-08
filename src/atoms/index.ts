import { atom } from 'recoil';

interface User {
  email: string | undefined;
}

export const authState = atom<User>({
  key: 'authState',
  default: {
    email: undefined,
  },
});
