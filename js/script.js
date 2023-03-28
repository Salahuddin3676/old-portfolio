const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

document.querySelectorAll('.nav-links').forEach( link => link.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
}))

