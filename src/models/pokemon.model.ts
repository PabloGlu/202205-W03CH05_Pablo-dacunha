export class PokemonModel {
    static generateId(): string {
        // error
        // return uuid();
        return String(Math.floor(Math.random() * 10_000_000));
    }
    id: string;
    isComplete: boolean;
    constructor(public name: string, public responsible: string) {
        this.id = PokemonModel.generateId();
        this.isComplete = false;
    }
}

let pokemon = [
    new PokemonModel('Hacer el header', 'Irene'),
    new PokemonModel('Hacer el footer', 'Fernamdo'),
    new PokemonModel('Hacer el main', 'Jose'),
];
pokemon[0].isComplete = true;
export const POKEMON: Array<PokemonModel> = pokemon;