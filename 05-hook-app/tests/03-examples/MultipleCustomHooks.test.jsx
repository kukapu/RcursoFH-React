
import { render, renderHook, screen, fireEvent } from '@testing-library/react'
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter } from '../../src/hooks/useCounter'
import { useFecth } from '../../src/hooks/useFecth'

jest.mock('../../src/hooks/useFecth')
jest.mock('../../src/hooks/useCounter')

describe('test on <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () => {
        jest.clearAllMocks()
    })


    test('should show component for default', () => {

        useFecth.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        })

        render( <MultipleCustomHooks /> )

        expect( screen.getByText('Loading...') )
        expect( screen.getByText('BreakingBad Qoutes') )

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})
        // console.log(nextButton.disabled)
        expect( nextButton.disabled ).toBeTruthy()

        // screen.debug()

    })

    test('should show a Quote', () => {

        useFecth.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        })
        
        render( <MultipleCustomHooks /> )

        expect( screen.getByText('Hola Mundo')).toBeTruthy()
        expect( screen.getByText('Fernando')).toBeTruthy()

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})
        expect( nextButton.disabled ).toBeFalsy()

        screen.debug()

    })

    test('should call increment function', () => {

        useFecth.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        })

        render( <MultipleCustomHooks /> )

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})
        fireEvent.click( nextButton )

        expect( mockIncrement ).toHaveBeenCalled()
 
    })

})