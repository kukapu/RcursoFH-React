import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test <GifItem />', () => {

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('should match snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot()
    })

    test('should show img with URL and ALT indicated', () => {

        render( <GifItem title={ title } url={ url } /> )
        // screen.debug()
        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( alt )
    })

    test('should show title in component', () => {

        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title )).toBeTruthy()
    })



})