const menuButton = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.links-list')


menuButton.addEventListener("click", () =>{
  navMenu.classList.toggle('active-link')
  menuButton.classList.toggle('menu-abierto')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active-link'))
})
