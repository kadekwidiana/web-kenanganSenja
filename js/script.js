// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

// Ketika menu diklik
hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active')
}

// Klik di luar sidebar untuk hilangkan nav
document.addEventListener('click', function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});