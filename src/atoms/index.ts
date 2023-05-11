import { atom } from 'recoil';

interface UserData {
  email: string | null;
}

export const userDataState = atom<UserData>({
  key: 'userData',
  default: {
    email: null,
  },
});
