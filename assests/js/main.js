const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


// menu show       
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}      


//Validation if constant exists

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}


// remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav_link , we remobe the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))






// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset 

    sections.forEach(curent =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if(scrollY && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', scrollActive)

// change background header
function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll header')
}
window.addEventListener('scroll', scrollHeader)

//Show scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >=560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Dark Light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// text animation 
var typed = new Typed("#text1", {
    strings:["~ Businessman" , "~ VisionaryLeader " , "~ MarketInsights " , "~ LeadershipExcellence " ," ~ ClientFocused " ],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})