let listItem = document.getElementsByTagName('li')

let listItems = [...listItem]

listItems.forEach((li, index)=> {
    let text = li.innerHTML
    li.innerHTML = `${index + 1}. ${text}`

})