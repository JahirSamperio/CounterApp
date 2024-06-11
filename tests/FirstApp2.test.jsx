import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 
    const title = 'Hola soy Jahir'
    test('debe hacer match con el snapshot', () => { 
        const {container} = render( <FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje', () => { 
        render(<FirstApp title={title}/>);
        
        //Screen toma el componente renderizado
        // screen.debug() muestra el componente 

        expect(screen.getByText(title)).toBeTruthy();
    })
    
    test('debe de mostrar el titulo en un h1', () => { 
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
     })
})