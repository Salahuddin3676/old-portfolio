let count = 0;

const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const elementName = event.currentTarget.classList;

        if (elementName.contains('increase')) {
            count++;
        } else if (elementName.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }
        
        if(count > 0) {
            value.style.color = 'green'
        } else if(count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }

        value.textContent = count;
    })
})
