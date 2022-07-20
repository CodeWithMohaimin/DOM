
let list = document.getElementById('list');

//create element Function
function createElement(tagName, className, innerHTML) {
    tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag;
}

// Create Append Function
function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}











//Create Element with using Custom Function
let li = createElement('li', 'li-className', 'Four');
let li2 = createElement('li', 'li-className', 'Five');
//Append Element with using Custom Function
append(list,[li,li2])