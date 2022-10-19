import create from "zustand";

interface TagStoreProps {
    TagList: string[];
    SetTag: (tag: string[]) => void;
  }
  

export const useTagFormStore = create<TagStoreProps>((set) => ({
    TagList: [],
    SetTag: (tag: string[]) => set((state) => ({ TagList: tag })),
  }));