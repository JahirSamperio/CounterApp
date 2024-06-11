import PropTypes from 'prop-types';

export const FirstApp = ({title, age, name}) => {
    return (
        <>
            {/* <Form 
                // title= "Jahir" 
                age= {30}
                // name= 'Jahir Samperio'
            />
            // <> */}
            <h1 data-testId="test-title">{title}</h1>
            <p>{age}</p>
            <p>{name}</p>
        </>
    )
}

const Form = ({title, age, name}) => {
    return (
        <>
            {/* <h1>{title}</h1> */}
            <p>{age}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

//Valores por defecto a cada componente
//Entran antes de los proptypes
FirstApp.defaultProps = {
    title: 'No hay titulo', 
    name: 'Jahir Samperio',
    age: 19
}