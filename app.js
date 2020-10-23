const canvas = document.querySelector('#draw')

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

// when we click down we will set this to true and when we click up/let go of the button we will set this to false
let isDrawing = false

// this will help us to starting point and endpoint
let lastY = 0
let lastX = 0

function draw(e) {
    // stop the function from running when they are not moused down
    if (!isDrawing) return;
}

//  will listen for the mouse move
canvas.addEventListener('mousemove', draw)
// when mouse is down we are going to set the isDrawing to true
canvas.addEventListener('mousemove', () => isDrawing = true)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

