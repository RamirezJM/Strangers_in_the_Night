async function getMenu(jsonFile){
  try {
    const response = await fetch(jsonFile)
    if(!response.ok){
      throw new Error(response.status)
    }
    const data = await response.json()
    const key = Object.keys(data)[0]
    return data[key]
  } catch (error) {
    console.error(error)
    
  }
}

function renderMenu(items, containerId){
  const container = document.getElementById(containerId)
  container.innerHTML = ''
  items.forEach(item => {
    const itemContainer = document.createElement('div')
    itemContainer.classList.add('item-container')
    let content
    if(item.info && item.precio2){
      content = `<div class="producto producto4">
                  <p class="nombre">${item.nombre}</p>
                  <p class="ingredientes">${item.info}</p>
                 </div>
                 <div class="precios precios4">
                 <p>(2P)</p>
                  <p class="valor">$${Number(item.precio).toLocaleString('es-CL')}</p>
                 <p>(4P)</p> 
                  <p class="valor">$${Number(item.precio2).toLocaleString('es-CL')}</p>
                 </div>`
    }else if(item.info){
      content = `<div class="producto producto3">
                  <p class="nombre">${item.nombre}</p>
                  <p class="ingredientes">${item.info}</p>
                 </div>
                 <p class="valor">$${Number(item.precio).toLocaleString('es-CL')}</p>`
    }else{
      content = `<p class="nombre">${item.nombre}</p><p class="valor">$${Number(item.precio).toLocaleString('es-CL')}</p>`
    }

    itemContainer.innerHTML = content
    container.appendChild(itemContainer)

  })
}

async function loadMenu(){

  const cocteles = await getMenu('assets/data/cocteles.json')
  renderMenu(cocteles, 'cocteles')

  const combinados = await getMenu('assets/data/combinados.json')
  renderMenu(combinados, 'combinados')

  const vinos = await getMenu('assets/data/vinos.json')
  renderMenu(vinos, 'vinos')

  const cervezas = await getMenu('assets/data/cervezas.json')
  renderMenu(cervezas, 'cervezas')

  const bebidas = await getMenu('assets/data/bebidas.json')
  renderMenu(bebidas, 'bebidas')

  const tablas = await getMenu('assets/data/tablas.json')
  renderMenu(tablas, 'tablas')

  const sandwich = await getMenu('assets/data/sandwich.json')
  renderMenu(sandwich, 'sandwich')
 
}
loadMenu()

