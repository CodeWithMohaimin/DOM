let title = document.getElementById('title');
let list = document.getElementById('list');
title.style.background = '#99f'
title.style.fontFamily = 'sans-serif'
title.style.color = 'red'


let styleObj = {
    background: '#99f',
    color: 'red',
    fontFamily : 'sans-serif',
}
    
Object.assign(list.style, styleObj)
Object.assign(title.style, styleObj)