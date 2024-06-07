import { create } from "zustand";

type navbarStoreType = {
  responsiveMode: string;
  setResponsiveMode: (responsiveMode: string) => void;
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

const useStoreNavbar = create<navbarStoreType>((set) => ({
  responsiveMode: "",
  setResponsiveMode: (responsiveMode: string) => set({ responsiveMode }),

  menuIsOpen: false,
  setMenuIsOpen: (menuIsOpen: boolean) => set({ menuIsOpen }),
}));

export default useStoreNavbar;
