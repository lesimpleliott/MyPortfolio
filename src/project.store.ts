import { create } from "zustand";

type projectStoreType = {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
};

const useStoreProject = create<projectStoreType>((set) => ({
  modalIsOpen: false,
  setModalIsOpen: (modalIsOpen: boolean) => set({ modalIsOpen }),
  tabIndex: 0,
  setTabIndex: (tabIndex: number) => set({ tabIndex }),
}));

export default useStoreProject;
