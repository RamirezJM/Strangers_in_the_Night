const menuButton = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.links-list')


menuButton.addEventListener("click", () =>{
  navMenu.classList.toggle('active-link')
  menuButton.classList.toggle('menu-abierto')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active-link'))
})


const navBar = document.querySelector('header')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
  const scrollMove = window.scrollY
  if(scrollMove > lastScrollTop){
    navBar.classList.remove('fixed')
  }
  else{
    if(scrollMove > 20){
      navBar.classList.add('fixed')
    }
    else{
      navBar.classList.remove('fixed')
    }
  }
  lastScrollTop = scrollMove
})