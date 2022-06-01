window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showTheMenu()
  backToTop()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  //activateMenuAtCurrentSection(services)
}
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //Verificar se a seção passou da linha
  // quais dados vou precisar?
  // topo da seção
  const sectionTop = section.offsetTop
  // a altura da seção
  const sectionHeight = section.offsetHeight
  // O topo da sção chegou ao limite
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //console.log(
  //'O topo da sessão chegou ou passou da linha?',
  //sectionTopReachOrPassedLine
  //)

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //console.log('O topo da sessão da linha?', sectionEndPassedTargetLine)

  //Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

//----------------------------------------------eventos de menu--------------------------//
function showTheMenu() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTop() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
//--------------------------------------------//
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function removeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
 #home img,
  #stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
