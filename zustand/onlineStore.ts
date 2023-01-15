import create from "zustand";

interface OnlineStoreProps {
    isOnline : boolean
    SetOnline: (online: boolean) => void;

}


export const useOnlineStore = create<OnlineStoreProps>((set) => ({
    isOnline: true,
    SetOnline: (online: boolean) => set((state) => ({ isOnline: online })),
}));