import create from "zustand";

interface TagStoreProps {
    Tags: string[];
    SetTags: (tag: string[]) => void;
  }
  

export const useTagFormStore = create<TagStoreProps>((set) => ({
    Tags: [],
    SetTags: (tag: string[]) => set((state) => ({ Tags: tag })),
  }));