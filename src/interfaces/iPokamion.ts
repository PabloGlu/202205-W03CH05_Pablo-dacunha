export interface iPokamion {
        abilities: Array<{
            ability: Array <{
              name: string,
              url: string
            }>
        }>
        base_experience: number,
        height: number,
        location_area_encounters: string,
        moves: Array <{
            move: Array <{
              name: string,
              url: string
            }>, 
        name: string,
        id: string,
        sprites: {
            back_default: string,
            front_default: string,
            'official-artwork': Array <{
                front_default: string
              }>
        }, 
        types: Array <{
            slot: number,
            type: Array <{
              name: string,
              url: string
            }>
          }>,
        weight: number 
        
    }>,
}