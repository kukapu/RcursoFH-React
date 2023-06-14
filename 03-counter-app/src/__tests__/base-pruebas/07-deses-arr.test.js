import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test 07-deses-arr', () => { 
    
    test('should return string and number', () => { 
        
        const [ letter, numbers ] = retornaArreglo();
        
        // expect( letter ).toBe( 'ABC' )
        // expect( numbers ).toBe( 123 )

        expect( typeof letter ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' )

        expect( letter ).toEqual( expect.any(String) )

    })

})