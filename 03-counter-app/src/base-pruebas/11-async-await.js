

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'O4tsGwYWlmxtC0Rdv3oVhdu0VE8o4IHF';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url
        
    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



