export interface History {
    name: string;
    changedToAt?: number;
}

export interface PlayerInfo {
    name: string;
    uuid: string;
    history: History[];
    head: string;
    head3D: string;
}