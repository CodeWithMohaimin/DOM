
let list = document.getElementById('list');
let container = document.getElementById('container');


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

//------------------------------------------------->

//Create Element with using Custom Function
// let li = createElement('li', '', 'Four');
// let li2 = createElement('li', '', 'Five');
//Append Element with using Custom Function
// append(list, [li, li2]);
//--------------------------------->

let p = createElement('p', 'slogan', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.')

let p2 = createElement('p', 'slogan', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.')

let div = createElement('div')

append(div, [p, p2])
append(container, [div])
//----------------------->
let div2 = createElement('div')

let h1 = createElement('h1','','I am from Virtual Dom')
append(div2, [h1])
append(container, [div2])

list.insertAdjacentElement('afterbegin', div2)
//Insert Adjacent Elements
// 1. before begin
// 2. after begin
// 3. before end
// 4. after end

list.insertAdjacentElement('beforebegin', div)
