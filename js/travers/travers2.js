let listItem = document.getElementsByTagName('li')

let listItemSpread = [...listItem]

console.log(listItemSpread);

listItemSpread.forEach((value, index) => {
    let text = value.innerHTML;
    value.innerHTML = `${index + 1}. ${text}`
})
// This is foreach method

// let arr = [1, 2, 3, 4, 5]
// arr.forEach(function (value, ind, arr) {
//     console.log(value, ind, arr);
// })