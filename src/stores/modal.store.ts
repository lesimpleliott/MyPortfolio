import { create } from "zustand";

type projectStoreType = {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
};

const useStoreModal = create<projectStoreType>((set) => ({
  modalIsOpen: false,
  setModalIsOpen: (modalIsOpen: boolean) => set({ modalIsOpen }),
}));

export default useStoreModal;
