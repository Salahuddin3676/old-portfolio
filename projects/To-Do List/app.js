const textBox = document.querySelector('.text-box');
const btn = document.querySelector('.btn');
const listContainer = document.querySelector('.list-container');

btn.addEventListener('click', () => {
    if(textBox.value === ''){
        alert('Please specify the Task');
    } else{
        let li = document.createElement('li');
        listContainer.appendChild(li);

        let div = document.createElement('div');
        
        let p = document.createElement('p');
        p.innerText = textBox.value;
        li.appendChild(p);
        textBox.value = '';
        
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerText = 'Edit';
        div.appendChild(editBtn);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
        div.appendChild(deleteBtn);

        li.appendChild(div);

        saveData();
    }
})

listContainer.addEventListener('click', (event) => {
    let li = event.target.parentElement.parentElement;

    if(event.target.tagName === 'P') {
        event.target.classList.toggle('selected');
        saveData();
    } else if(event.target.innerText === 'Delete') {
        event.target.parentElement.parentElement.remove();
        saveData();
    } else if(event.target.innerText === 'Edit') {
        const p = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = p.textContent;
        li.insertBefore(input, p);
        li.removeChild(p);
        input.focus();
        event.target.innerText = 'Save';
        event.target.style.color = 'blue';
        saveData();
    } else if(event.target.innerText === 'Save'){
        const input = li.firstElementChild;
        const p = document.createElement('p');
        p.innerText = input.value;
        li.insertBefore(p, input);
        li.removeChild(input);
        event.target.innerText = 'Edit';
        event.target.style.color = 'green';
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem('data');
}

getData();