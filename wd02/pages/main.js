/*Add function*/
//The text inbox is cleared for the next item.

let ul = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.querySelector('#clicker');
let remove = document.querySelector('#remove');
//this function adds items to the list.
btn.addEventListener('click', () => {
    let newLi = document.createElement("li")
    newLi.innerHTML = `${input.value}`
    ul.appendChild(newLi)
    input.value = ''
})
//This function removes items on the list.
remove.addEventListener('click', () => {
    ul.removeChild(ul.lastElementChild)
    input.value = ''
})

let li = document.querySelectorAll('li');
//This function strikes through an item on the list.
ul.addEventListener('click', (event) => {
    if (!event.target.matches('li')) return
    event.target.classList.toggle('strike')
})

