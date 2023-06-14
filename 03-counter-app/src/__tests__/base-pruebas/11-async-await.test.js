import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas con 11-async-await', () => { 
    
    test('getImagen debe retornar un URL de la imagen', async () => { 
        
        const url = await getImagen()
        
        expect( typeof url ).toBe( 'string' )

    })


    test('getImagen debe retornar un error sino tenemos api key', async () => { 
        
        const resp = await getImagen()

        expect( resp ).toBe( 'No se encontro la imagen' )

    })


})