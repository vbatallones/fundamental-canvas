const canvas = document.querySelector('#draw')

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100;

// when we click down we will set this to true and when we click up/let go of the button we will set this to false
let isDrawing = false

// this will help us to starting point and endpoint
let lastX= 0;
let lastY = 0;

let hue = 0;

let direction = true;

function draw(e) {
    // stop the function from running when they are not moused down
    if (!isDrawing) return;
    //  setting up the color using the HSL 
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    // start a path
    ctx.beginPath()
    // start in a x, y 
    ctx.moveTo(lastX, lastY)
    //  go to.  move to x, y
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    // we increment the hue color every time our mousedown is on hold.
    hue++
    // we check if the hue color is greater than or equal to 360. if it is equal or greater than we want to go back to it's starting point color.
    if (hue >= 360) {
        hue = 0;
    }
    // we check the line width of our drawing and flip the direction.
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction
    }

    if(direction) {
        ctx.lineWidth++
    
    } else {
        ctx.lineWidth--
    }
}
// when mouse is down we are going to set the isDrawing to true
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})

//  will listen for the mouse move
canvas.addEventListener('mousemove', draw)
// when mouse is up / let go of the mouse it will stop the drawing 
canvas.addEventListener('mouseup', () => isDrawing = false)
// when mouse is out of the window it will stop the drawing
canvas.addEventListener('mouseout', () => isDrawing = false)

