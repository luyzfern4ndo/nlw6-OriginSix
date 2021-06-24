/*Abre e fecha o menu quando clicar no ícone: hamburguer e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    /**
     * toggle - troca
     * se tiver não tiver a classe show, ele adiciona. se tiver, ele retira
     */
    nav.classList.toggle('show')
  })
}

/** Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/** Mudar o box-shadow do header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    // Scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Sctroll menor que a altura do header
    header.classList.remove('scroll')
  }
})
