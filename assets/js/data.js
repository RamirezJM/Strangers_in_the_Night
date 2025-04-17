async function getMenu(){
  try {
    const response = await fetch('assets/data/bebidas.json')
    if(!response.ok){
      throw new Error(response.status)
    }
    const data = await response.json()
    /* console.log(data) */
    return data
  } catch (error) {
    console.error(error)
    
  }
 
}
/* getMenu() */

function createMenu(data){
  console.log(data)

}
createMenu()