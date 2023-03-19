import create from "zustand";

interface UserStoreProps {
    Token : string | undefined,
    Refresh_Token : string | undefined
    SetToken: (Token: string) => void;
    SetRefresh_Token: (Refresh_Token: string) => void;
}



export const useUserStore = create<UserStoreProps>((set) => ({
    Token : undefined,
    Refresh_Token : undefined,
    SetToken: (token: string) => set((state) => ({ Token: token })),
    SetRefresh_Token: (refresh_token: string) => set((state) => ({ Refresh_Token: refresh_token }))
}));