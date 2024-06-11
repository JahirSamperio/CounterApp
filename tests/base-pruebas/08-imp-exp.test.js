import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas archivo 08-imp-exp', () => {
    test('Prueba de getHeroeById para retornar por id', ()=> {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    })
    test('Prueba de getHeroByOwner para retornar heroes de DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        expect(hero).toEqual(hero.filter( (heroe) => heroe.owner === owner))
    }) 
})