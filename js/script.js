const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

document.querySelectorAll('.nav-links').forEach( link => link.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
}))

const image = document.getElementById('img');

image.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')) {
        image.src = './images/sun-regular.svg';
    } else{
        image.src = './images/moon-regular.svg';
    }
})
