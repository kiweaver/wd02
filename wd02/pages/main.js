let ul = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.querySelector('#clicker');
let remove = document.querySelector('#remove');

btn.addEventListener('click', () => {
  let newLi = document.createElement("li")
  newLi.innerHTML = `${input.value}`
  ul.appendChild(newLi)
  input.value = ''
})

remove.addEventListener('click', () => {
 ul.removeChild(ul.lastElementChild)
  input.value = ''
})


let li = document.querySelectorAll('li');

ul.addEventListener('click', (event) => {
  if (!event.target.matches('li')) return
  event.target.classList.toggle('strike')
})
