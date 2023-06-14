import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp"


describe('Test CounterApp', () => {

    const initialValue = 10
    
    test('should match with snapshot', () => { 

        const { container } = render( <CounterApp value={ initialValue } /> )
        expect( container ).toMatchSnapshot();

    })

    test('should show initial value 100', () => { 

        render( <CounterApp value={ 100 } /> )
        expect( screen.getByText(100) ).toBeTruthy()

        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100')

    })

    test('should increment with +1', () => { 

        render( <CounterApp value={ initialValue } />)
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy()

    })

    test('should increment with -1', () => { 

        render( <CounterApp value={ initialValue } />)
        fireEvent.click( screen.getByText('-1') )
        // screen.debug()
        expect( screen.getByText('9') ).toBeTruthy()

    })

    test('should reset works', () => { 
        
        render( <CounterApp value={ initialValue } />)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('Reset') )

        // screen.debug()
        expect( screen.getByText( 10 )).toBeTruthy()

    })

    test('should reset works more specific aria-label', () => { 
        
        render( <CounterApp value={ initialValue } />)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        // fireEvent.click( screen.getByText('Reset') )
        fireEvent.click( screen.getByRole('button', { name: 'btnReset' }) )

        // screen.debug()
        expect( screen.getByText( 10 )).toBeTruthy()

    })

})