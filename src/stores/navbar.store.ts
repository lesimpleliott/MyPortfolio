import { create } from "zustand";

type navbarStoreType = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

const useStoreNavbar = create<navbarStoreType>((set) => ({
  menuIsOpen: false,
  setMenuIsOpen: (menuIsOpen: boolean) => set({ menuIsOpen }),
}));

export default useStoreNavbar;
