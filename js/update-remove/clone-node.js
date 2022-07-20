
let list = document.getElementById('list');

let listItem = list.lastElementChild.cloneNode() // not deeply clone
listItem.innerHTML = 'Four'
list.appendChild(listItem)



let listItem2 = list.lastElementChild.cloneNode(true) // Deeply clone
list.appendChild(listItem2)
