// const getImagePromesa = () =>
//   new Promise(resolve => resolve('https://asdasdasd.com'))

// getImagePromesa().then(console.log)

const getImage = async () => {
  try {
    const apiKey = 'O4tsGwYWlmxtC0Rdv3oVhdu0VE8o4IHF'
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const { data } = await resp.json()
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
  } catch (error) {
    console.log(error)
  }
}

getImage()
