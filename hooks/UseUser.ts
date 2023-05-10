import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  user_type: string;
  token: string;
}
interface UserState {
  user: User | null;

  setUser: (user: User | null) => void;
}

const dummyUser: User = {
  id: "1",
  username: "magesh",
  email: "magesh@gmail.com",
  avatar: "https://i.pravatar.cc/150?img=3",
  user_type: "user",
  token: "1234567890",
};

export const UseUser = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: dummyUser,
        setUser: (user: User | null) => set({ user }),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
