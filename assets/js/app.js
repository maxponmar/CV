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

window.addEventListener('scroll', event => {
    let header = document.querySelector('.l-header');
    (window.scrollY >= 40) ? header.classList.add('scroll') : header.classList.remove('scroll');
});