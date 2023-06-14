import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState(value)

    // const handleAdd = () => setCounter( counter + 1 )
    // const handleDown = () => setCounter( (c) => c - 1 )
    // const handReset = () => setCounter(value)

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            {/* <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleDown }> -1 </button>
            <button onClick={ handReset }> Reset </button> */}
            <button onClick={ () => setCounter( counter + 1 ) }> +1 </button>
            <button onClick={ () => setCounter( counter - 1 ) }> -1 </button>
            <button aria-label="btnReset" onClick={ () => setCounter( value ) }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}