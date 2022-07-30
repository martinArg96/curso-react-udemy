import { useState } from 'react';
import PropTypes from 'prop-types';
//los hooks son funciones


export const  CounterApp = ({value}) => {

    console.log('renderisado')
    
    const [ counter, setCounter ] = useState (   value   );//valor incial es value

    
    const handleAdd = () => {
        // console.log('+1')
        // value = 1000;
        // console.log(value)
        setCounter( counter +  1  )
    }
    const handleRest = () => {
        setCounter( counter - 1)
    }
    const Reset = () => {
        setCounter( value )
    }

    return(
        <>
        <h1> Counter App</h1>
        <h2>    {   counter   }   </h2>
        <button onClick={ /*(event) => handleAdd(event) */ handleAdd } >
            +1
        </button>
        <button onClick={ /*(event) => handleAdd(event) */ handleRest } >
            -1
        </button>
        <button onClick={ /*(event) => handleAdd(event) */ Reset } >
            reset
        </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 1
}