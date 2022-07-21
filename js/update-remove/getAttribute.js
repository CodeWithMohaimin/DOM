
let list = document.getElementById('list');

// Attributes getting === this is hardest way to get A Attributes;
let att = list.attributes
console.log(att);


let att3 = list.getAttributeNames()
console.log(att3);


let att2 = list.getAttribute('id');
console.log(att2);

let att4 = list.getAttributeNode('class')
console.log(att4); // null because we haven't any class name



// Easy way to getting a Attribute
let att5 = list.id;
console.log(att5);

console.log(list.className); // null because we haven't any class name

console.log(list.classList); //get a array of classes
