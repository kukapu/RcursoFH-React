import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test in <AddCategory />', () => {

    test('should change boxtext value', () => {

        render( <AddCategory onNewCategory={ ()=> {} }/> )
        //screen.debug()
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: { value: 'Saitama' } })
        //screen.debug()
        expect( input.value ).toBe( 'Saitama' )
        
    })

    test('should call onNewCategory if input value', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()
        
        render( <AddCategory onNewCategory={ onNewCategory }/> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } })
        fireEvent.submit( form )
        // screen.debug()
        expect( input.value ).toBe('')

        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes(1)
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

    })  

    test('should dont call onNewCategory is empty input', () => {

        const onNewCategory = jest.fn()
        
        render( <AddCategory onNewCategory={ onNewCategory }/> )

        const form = screen.getByRole('form')
        fireEvent.submit( form )
        // screen.debug()

        // expect( onNewCategory ).toHaveBeenCalledTimes(0)
        expect( onNewCategory ).not.toHaveBeenCalled()
    })

})