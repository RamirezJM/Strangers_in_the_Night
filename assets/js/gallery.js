function createGallery(evento, cantidad){
  const container = document.querySelector(`.${evento}`)
  for(let i = 1; i <= cantidad; i++){
    const path = `assets/images/eventos/${evento}/${i}.jpg`
    const link = document.createElement('a')
    link.href = path
    link.classList.add('evento-link')

    const image = document.createElement('img')
    image.src = path
    image.alt = `${evento} image${i}`
    image.classList.add('evento-image')

    link.appendChild(image)
    container.appendChild(link)

  }
  baguetteBox.run('.blues-rock', {buttons: true})
}

createGallery('blues-rock', 5)