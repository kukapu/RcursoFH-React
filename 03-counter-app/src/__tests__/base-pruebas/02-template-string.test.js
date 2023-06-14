import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Prueba en 02-template-sting', () => { 

    test('should return "Hola Fernando"', () => {

        const name = 'Fernando';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);

    });
});