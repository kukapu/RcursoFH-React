import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Test on <GifExpertApp />', () => {

    test('should ', () => {

        render( <GifExpertApp /> )
        // screen.debug()
        const input = screen.getByRole('textbox')
        fireEvent.input( input, { newCategory: { value: 'One Punch' } })
        fireEvent.input( input, { newCategory: { value: 'Goku' } })
        
        // expect( screen.getAllByRole('input').length ).toBe(2)

    })

})