import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Test in <GifGrid />', () => {

    const category = 'One Punch'

    test('should show loading first', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render( <GifGrid category={ category } /> )
        expect( screen.getByText('Loading...') )
        expect( screen.getByText( category ) )

    })

    test('should show items when img are uploaded from useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Onizuka',
                url: 'https://localhost/onizuka.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render( <GifGrid category={ category } /> )
        //screen.debug()
        expect( screen.getAllByRole('img').length ).toBe( 2 )

    })

})