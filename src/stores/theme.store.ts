import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

// récuperer le theme systeme
const getSystemTheme = (): string => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
};

const useStoreTheme = create(
  persist<ThemeType>(
    (set) => ({
      theme: getSystemTheme(),
      setTheme: (theme: string) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    { name: "theme" }
  )
);

export default useStoreTheme;
