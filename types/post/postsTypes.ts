export interface Post {
    id:         number;
    title:      string;
    content:    string;
    published:  boolean;
    images:     string[];
    createdAt:  Date;
    updatedAt:  Date;
    authorID:   number;
    author:     Author;
    cooperador: Cooperador[];
    files:      File[];
}

export interface Author {
    id:   number;
    name: string;
}

export interface Cooperador {
    id:         number;
    tipoCedula: string;
    nombre:     string;
    tipo:       string;
}

export interface File {
    id:        number;
    groupName: GroupName;
    filename:  string;
    secureUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum GroupName {
    Comida = "comida",
    LosDeIT = "Los de IT",
    PlayaNueva = "playa nueva",
}
