// stores/modal.store.ts
import { create } from "zustand";

type ModalStore = {
  modalIsOpen: boolean;
  modalContent: "project" | "credits" | null;
  setModalIsOpen: (value: boolean) => void;
  setModalContent: (value: "project" | "credits" | null) => void;
};

export const useStoreModal = create<ModalStore>((set) => ({
  modalIsOpen: false,
  modalContent: null,
  setModalIsOpen: (value) => set(() => ({ modalIsOpen: value })),
  setModalContent: (value) => set(() => ({ modalContent: value })),
}));
