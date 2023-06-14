import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroById debe retornar un hero por ID', () => { 
    
        const id = 1;
        const hero = getHeroeById( id )

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    }) 

    test('getHeroById debe retornar undefiened sino existe', () => { 
    
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    }) 

    test('getHeroByOwner DC debe retornar 3 resultados', () => { 
        
        const owner = 'DC';
        const listHero = getHeroesByOwner( owner );

        expect( listHero.length ).toBe( 3 );
        expect( listHero ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);

        expect( listHero ).toEqual( heroes.filter( (hero)=> hero.owner === 'DC' ))
    })

    test('getHeroByOwner Marvel debe retornar 2 resultados', () => {
    
        const owner = 'Marvel';
        const listHero = getHeroesByOwner( owner );

        expect( listHero.length ).toBe( 2 );
        expect( listHero ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' },
        ]);
        
        expect( listHero ).toEqual( heroes.filter( (hero)=> hero.owner === 'Marvel' ))
    })

})