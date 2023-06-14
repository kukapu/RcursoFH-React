import PropTypes from 'prop-types';


export const App = ( { 
    title,
    subTitle = 'El porro vengador',
    name 
} ) => {
 
    // console.log(title)

    return (
        <>
            <h1 data-testid='test-title'>{ title }</h1>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

App.defaultProps = {
    name: 'Porros escondidos',
    subTitle: 'No hay subtitulo',
    // title: 'No hay titulo',
}