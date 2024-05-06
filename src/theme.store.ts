import { create } from "zustand";

type ThemeType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const useStoreTheme = create<ThemeType>((set) => ({
  theme: "dark",
  setTheme: (theme: string) => {
    set({ theme });
  },
}));

export default useStoreTheme;
