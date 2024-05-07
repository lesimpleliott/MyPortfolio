import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const useStoreTheme = create(
  persist<ThemeType>(
    (set) => ({
      theme: "dark",
      setTheme: (theme: string) => {
        set({ theme });
      },
    }),
    { name: "theme" }
  )
);

export default useStoreTheme;
