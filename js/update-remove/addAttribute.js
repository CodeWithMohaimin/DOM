let list = document.getElementById('list');

let lastItem = list.lastElementChild;

lastItem.className = 'last-Item' //one way

lastItem.setAttribute('id', 'lastItemID'); //tow way

console.log(lastItem);










let att = document.createAttribute('title') // three way
att.value = 'I am virtually created title'

lastItem.setAttributeNode(att)

// lastItem.title = att

console.log(lastItem);