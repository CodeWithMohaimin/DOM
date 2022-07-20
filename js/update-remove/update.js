let list = document.getElementById('list');

let firstChild = list.firstElementChild;

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + '(modified)';
    firstChild.style.color = 'green'
}, 3000)


setTimeout(() => {
    list.lastElementChild.remove()
},4000)