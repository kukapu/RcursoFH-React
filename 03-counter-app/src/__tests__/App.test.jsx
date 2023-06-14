import { getByTestId, render } from '@testing-library/react';
import { App } from '../App';

describe('Pruebas en <App />º', () => { 
    
    // test('debe hacer match con el snapshot', () => { 
        
    //     const title = 'Hola, Soy Goku'
    //     const { container } = render( <App title={ title } /> )

    //     expect( container ).toMatchSnapshot()

    // })

    test('Debe de mostrar el titulo en un h1', () => { 
        
        const title = 'Hola, Soy Goku'
        const { getByText, getByTestId } = render( <App title={ title } /> )
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain( title )
        expect( getByTestId('test-title').innerHTML ).toContain(title)


    })

    // test('debe de mostrar el subtitulo enviado por props', () => { 
        
    //     const title = 'Hola, Soy Goku'
    //     const subTitle = 'Soy un subtitulo'
    //     const { getByText } = render(
    //         <App 
    //             title={ title }
    //             subTitle={ subTitle }
    //         /> )
    //     expect( getByText(title) ).toBeTruthy();

    
    // })

    test('debe de mostrar el subtitulo enviado por props', () => { 
        
        const title = 'Hola, Soy Goku'
        const subTitle = 'Soy un subtitulo'
        const { getAllByText } = render(
            <App 
                title={ title }
                subTitle={ subTitle }
            />)
        expect( getAllByText(subTitle).length ).toBe(3);

    
    })

})