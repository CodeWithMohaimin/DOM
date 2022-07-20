let listItem = document.getElementsByTagName('li')

let listItems = [...listItem] // spread operator

//for each loop/methods
listItems.forEach((li, index)=> {
    let text = li.innerHTML
    li.innerHTML = `${index + 1}. ${text}`

})