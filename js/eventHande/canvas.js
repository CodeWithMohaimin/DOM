
let canvas = document.getElementById('canvas');

canvas.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;


    if (e.offsetY===1 && e.offsetX ===1){
        alert('50,50')
    }
})