let list = document.getElementById('list');
console.log(list);

let parent = list.parentElement
console.log(parent);

let child = list.children
console.log(child);

let sibling = list.previousElementSibling;
console.log(sibling);

let sibling2 = list.nextElementSibling;
console.log(sibling2);

let li = document.querySelector('li')
console.log(li.nextElementSibling);


let li2 = document.getElementsByTagName('li')
console.log(li.previousElementSibling);

let first = list.firstElementChild;
console.log(first);