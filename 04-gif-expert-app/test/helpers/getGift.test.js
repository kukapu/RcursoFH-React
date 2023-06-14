import { getGifs } from '../../src/helpers/getGift'

describe('Pruebas en getGifs', () => {

    test('should return gif array', async() => {

        const gifs = await getGifs('One Punch')

        // console.log(gifs)
        expect( gifs.length ).toBeGreaterThan( 0 )
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })

    })

}) 
