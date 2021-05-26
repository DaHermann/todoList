// Creation des elements
let div = document.createElement('div');
let div2 = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');
let ul  = document.createElement('ul');
let body = document.querySelector('.todo');

// Ajout des classes
div.className = 'screen';
button.className = 'btn'
button.textContent = 'add';
input.className  = 'getVal';

div.appendChild(input);
div.appendChild(button);
body.appendChild(div); 
body.appendChild(ul);


/**
 * Selection et modification des elements
 */

let checkInput =  document.querySelectorAll('input[type=checkbox]');
let li =  document.querySelectorAll('li');
let btnSup  = document.querySelectorAll('.sup');
let ulList  = document.querySelector('.todo ul');

/**
 * Ecoute du click dubouton
 */
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let newTodo = input.value;
    if(newTodo!=''){
        // creation et ajout des taches todo
        createLi(newTodo);
        //list.push(newTodo);
    }
})


btnSup.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        ul.removeChild(e.target.parentNode);

    })
})

input.addEventListener('keypress',function(e){
    if(e.keyCode === 13 && this.value!=''){
        createLi(this.value)
    }
})

function createLi(val){
    let li = document.createElement('li');
    let btnSup  = document.createElement('button');
    let checked = document.createElement('input');
    let span  = document.createElement('span');
    
 
    btnSup.className  = 'sup';
    btnSup.textContent = 'X';
    btnSup.setAttribute('onclick','deleteTodo(event)');
    checked.setAttribute('onclick','checkeD(event)');
    checked.type = 'checkbox'
    span.textContent = val;
    li.appendChild(span);
    li.appendChild(checked);
    li.appendChild(btnSup);
    ul.appendChild(li);
    input.value = '';
}


function deleteTodo(e){
    e.preventDefault();
    ul.removeChild(e.target.parentNode);
    console.log('Ok deleted');
}

function checkeD(e){
    e.preventDefault();
    let span = e.target.parentNode.firstChild;
    
    if(span.style.textDecoration=='line-through'){
        span.style.textDecoration  = 'none';
        span.style.color  = 'none';
    }else{
        span.style.color  = 'lightblue';
        span.style.textDecoration  = 'line-through';
    }

    console.log(e.target.parentNode.firstChild);

}