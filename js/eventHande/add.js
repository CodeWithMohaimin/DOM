let btn = document.getElementById('btn');
let rbtn = document.getElementById('rbtn');
let list = document.getElementById('list');


btn.addEventListener('click', function () {
    let addItem = list.lastElementChild.cloneNode(true);
    addItem.innerHTML = 'New list item'
    list.appendChild(addItem)

})

rbtn.addEventListener('click', function () {
    list.lastElementChild.remove();
})

list.addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        e.target.remove()
    }
})