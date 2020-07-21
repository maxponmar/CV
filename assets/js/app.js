/* ===== MENU SHOW ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// ===== ACTIVE AND REMOVE MENU =====
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    //  Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    
    //  Remove Menu once you choose an option
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ===== CHANGE NAVIGATION STYLE ON SCROLL =====

// window.addEventListener('scroll', event => {
//     let header = document.querySelector('.l-header');
//     (window.scrollY >= 20) ? header.classList.add('scroll') : header.classList.remove('scroll');
// });

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        // console.log(sectionId)
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/* ===== SCROLL REVEAL ANIMATIONS ===== */
const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// => HOME
sr.reveal('.home_title', {origin:'top'})
sr.reveal('.home_img', {origin: 'bottom', delay: 400})
sr.reveal('.home_social', {origin: 'bottom', delay: 500, interval: 200})
sr.reveal('.button', {origin: 'left', delay: 300})

// => ABOUT
sr.reveal('.about_img', {})
sr.reveal('.about_subtitle', {delay: 200})
sr.reveal('.about_text', {origin:'left', delay: 400})

// => SKILLS 
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_container', {delay: 100})
sr.reveal('.skills_img', {origin:'bottom', delay: 150})
sr.reveal('.skills_text', {origin:'left', delay: 200})

// => WORK
sr.reveal('.work_table', {origin: 'left'})
sr.reveal('.work_img', {origin: 'bottom'})

// => CONTACT
sr.reveal('.contact_container', {origin: 'bottom'})