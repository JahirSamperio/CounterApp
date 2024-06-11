import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 
    // test('Debe de hacer match con el snapshot', () => { 
        
    //     const title = 'Hola soy Jahir';
    //     const { container } = render( <FirstApp title={ title } /> )

    //     expect(container).toMatchSnapshot();

    //  })
     test('debe mostrar el titulo del h1', () => { 
        const title = 'Hola soy Jahir'
        const {container, getByText, getByTestId} =  render ( <FirstApp title= {title} /> );

        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toBe(title);
        
      })

      test('debe mostrar el subtitulo', () => { 
        const title = 'Hola soy Jahir'
        
        const age = 19;
        
        const {getByText, getByTestId} =  render ( 
        <FirstApp 
            title= {title} 
            age = {age}/> 
        );

        expect( getByText(age) ).toBeTruthy();
    })
})