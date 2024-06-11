//Aplicacion de React
import React from 'react';
//Herramienta para renderizarlo
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css'

//Renderizado de la funcion
ReactDOM.createRoot(document.getElementById('root')).render( //El id debe ser igual al que esta en el div del index
    <React.StrictMode>
        <CounterApp value={ 0 }/> 
        {/* <FirstApp title='Hola soy Jahir' /> */}
    </React.StrictMode>
)/*Se escribre el nombre de la funcion*/
