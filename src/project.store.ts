import { create } from "zustand";

type projectStoreType = {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
};

const useStoreProject = create<projectStoreType>((set) => ({
  modalIsOpen: false,
  setModalIsOpen: (modalIsOpen: boolean) => set({ modalIsOpen }),
}));

export default useStoreProject;
