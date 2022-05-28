export interface iComponent {
    template: string; //lo tiene el padre asi que la interface no nos obliga en los componentes
    createTemplate(): string;
}

export interface iSerie {
    id: number;
    name: string;
    creator: string;
    year: number;
    poster: string;
    watched: boolean;
    score: number;
    emmies: number;
}
