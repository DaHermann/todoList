// Creation des elements
let div = document.createElement('div');
let div2 = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');
let ul  = document.createElement('ul');
// let li  = document.createElement('li');
let body = document.querySelector('.todo');


// Ajout des classes
div.className = 'screen';

button.textContent = 'add';
div.appendChild(input);
div.appendChild(button);
body.appendChild(div); 
body.appendChild(ul);

let list = ["Pirer","Manger","Doermir"];
/**
 * Redaction 
 * 
 */

list.forEach((element)=>{
    let li  = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
})

button.addEventListener('click', (e)=>{
    e.preventDefault();
    let newTodo = input.value;
    let li  = document.createElement('li');
    li.textContent = newTodo;
    if(newTodo!=''){
        ul.appendChild(li);
    }
})



