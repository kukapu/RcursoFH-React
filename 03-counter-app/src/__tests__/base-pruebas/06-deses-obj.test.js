import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-desestructuracion de objetos', () => { 
    
    test('should usContext return obj', () => {
        
        const clave = 'Latino'
        const edad = 18
        
        const hero = {
            clave : clave,
            edad : edad,
        }

        const data = usContext( hero )

        expect( data ).toEqual( {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    }) 

})