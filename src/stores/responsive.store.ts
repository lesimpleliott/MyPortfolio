import { create } from "zustand";

type responsiveStoreType = {
  responsiveMode: string;
  setResponsiveMode: (responsiveMode: string) => void;
};

const useStoreResponsive = create<responsiveStoreType>((set) => ({
  responsiveMode: "",
  setResponsiveMode: (responsiveMode: string) => set({ responsiveMode }),
}));

export default useStoreResponsive;
