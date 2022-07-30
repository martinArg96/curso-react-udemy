//Primero importo React
import React from 'react' ;

//una herramienta para renderizar
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp'; 
import {FirstApp} from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';


//



//empezamos con un componente... funcional component... porque es una funcion
//en general no esta dentro del main
/*
function App() {
    return (<h1> Hola mundo !!!!</h1>)
}
*/
//comento la function app y la llevo a helloworldapp.js(al final)

//importo direcatmnte
//import {App} from './HelloWorldApp'


//Renderizando cen el DOM 
// .....Document Object Model: Estandar para la presentacion de un documento HTML. 
//......Define la estrcutura y al forma de acceder y manipular objetos
/*
ReactDOM.createRoot(    document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
    </React.StrictMode>);
*/
ReactDOM.createRoot(    document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={5} /> */}
        <FirstApp/>
    </React.StrictMode>);


