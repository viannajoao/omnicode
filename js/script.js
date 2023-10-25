function myMenuFunction(){
  let menuBtn = document.getElementById("myNavMenu");

  console.log(menuBtn)
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}


window.onscroll = function () { headerShadow() };

function headerShadow() {

  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {

    

    navHeader.style.backgroundColor = "var(--cor-primary)";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";


  } else {

    navHeader.style.backgroundColor = "transparent";
    navHeader.style.height = "105px";
    navHeader.style.lineHeight = "105px";


  }
}

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.col', { delay: 100 })

const srTop = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  reset: true
})

srTop.reveal('.industries', {delay: 100})
srTop.reveal('.projects-icon', {delay: 100})

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '400px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.card-profile', {delay: 100})





const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)