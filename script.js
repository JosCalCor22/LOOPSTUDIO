//MENU BURGER
const botonOpen = document.querySelector('#Boton_open');
const botonClose = document.querySelector('#Boton_close');
let containerHamburger = document.querySelector('#Container_hamburger');

//EVENTOS
botonOpen.addEventListener('click', deployMenu);
botonClose.addEventListener('click', closeMenu);

//FUNCIONES
function deployMenu(){
    botonOpen.classList.add('inactive');
    containerHamburger.classList.remove('inactive');
}
function closeMenu(){
    containerHamburger.classList.add('close-menu-hamburguer');
    setTimeout(() => {
        botonOpen.classList.remove('inactive');
        containerHamburger.classList.add('inactive');
        containerHamburger.classList.remove('close-menu-hamburguer');
    }, 500);
}