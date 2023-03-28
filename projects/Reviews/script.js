import data from './reviewData.js';

let itemCount = 0;

const image = document.getElementById('img');
const name = document.getElementById('name');
const job = document.getElementById('job');
const text = document.getElementById('text');

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const randomBtn = document.querySelector('.randomBtn');

function personInfo() {
    const personData = data[itemCount];
    
    image.src = personData.img;
    name.textContent = personData.name;
    job.textContent = personData.job;
    text.textContent = personData.text;
}

window.addEventListener('DOMContentLoaded', function() {
    personInfo();
})

nextBtn.addEventListener('click', function() {
    itemCount++;

    if(itemCount > data.length - 1) {
        itemCount = 0;
    }
    personInfo();    
})

prevBtn.addEventListener('click', function() {
    itemCount--;

    if(itemCount < 0) {
        itemCount = data.length - 1;
    }
    personInfo();    
})

randomBtn.addEventListener('click', function() {
    itemCount = Math.floor(Math.random() * data.length)
    
    personInfo();
})