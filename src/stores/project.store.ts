import { create } from "zustand";

type projectStoreType = {
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
};

const useStoreProject = create<projectStoreType>((set) => ({
  tabIndex: 0,
  setTabIndex: (tabIndex: number) => set({ tabIndex }),
}));

export default useStoreProject;
