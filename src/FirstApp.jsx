import PropTypes from 'prop-types';

export const FirstApp = () => {
    return (
        <>
            <Form 
                // title= "Jahir" 
                age= {30}
                // name= 'Jahir Samperio'
            />
        </>
    )
}

const Form = ({title, age, name}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{age}</p>
            <p>{name}</p>
        </>
    )
}

Form.propTypes = {
    title: PropTypes.string.isRequired
}

//Valores por defecto a cada componente
//Entran antes de los proptypes
Form.defaultProps = {
    title: 'No hay titulo',
    name: 'Jahir Samperio'
}