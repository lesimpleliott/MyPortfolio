import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = "light" | "dark";

type ThemeStoreType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
  sysTheme: boolean;
  setSysTheme: (sysTheme: boolean) => void;
  initSysTheme: () => void;
};

const getSysTheme = (): boolean =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const useStoreTheme = create<ThemeStoreType>()(
  persist(
    (set, get) => ({
      // theme et setTheme : indique le theme actuel et permet de le changer
      theme: getSysTheme() ? "dark" : "light",
      setTheme: (theme) => set({ theme }),

      // fonction toggleTheme : permet de changer de theme : light => dark ou dark => light
      toggleTheme: () => {
        const currentTheme = get().theme;
        set({
          theme: currentTheme === "light" ? "dark" : "light",
          sysTheme: false,
        });
      },

      // sysTheme et setSysTheme : indique si le theme est identique au theme du systeme (true ou false)
      sysTheme: true,
      setSysTheme: (sysTheme) => set({ sysTheme }),

      // initSysTheme : initialise le theme en fonction du theme du systeme
      initSysTheme: () => {
        const storedState = JSON.parse(
          localStorage.getItem("theme-store") || "{}"
        ).state;
        if (storedState) {
          set({ theme: storedState.theme, sysTheme: storedState.sysTheme });
        } else {
          const darkMode = getSysTheme();
          set({ theme: darkMode ? "dark" : "light", sysTheme: true });
        }
      },
    }),
    {
      name: "theme-store",
    }
  )
);

export default useStoreTheme;
