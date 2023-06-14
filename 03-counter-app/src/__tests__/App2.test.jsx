import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('Pruebas en <App />º', () => { 
    
    const title = 'Hola, Soy Goku'
    const subTitle = 'Soy un subtitulo'

    test('should match with snapshot', () => { 
        
        const { container } = render( <App title={ title } /> )
        expect( container ).toMatchSnapshot()

    })

    test('should show message "Hola, Soy Goku"', () => { 

        render( <App title={ title } /> )
        // screen.debug()
        expect( screen.getByText(title) ).toBeTruthy()

    })

    test('should show title in h1', () => {
        
        render( <App title={ title } /> )
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title )


    })

    test('should show subTitle send for props', () => {

        render(
             <App 
                title={ title }
                subTitle={ subTitle }
            />
        )

        expect( screen.getAllByText(subTitle).length ).toBe(3)
        
    })


})