const CANVAS = document.getElementById('canvas')
const CTX = CANVAS.getContext('2d')

let drawing = false

let color = '#FF0000'

CANVAS.addEventListener('mousedown', (event) => {
    drawing = true
    draw(event)
})

CANVAS.addEventListener('mousemove', (event) => {
  if(drawing) {
    draw(event)
  }
})

CANVAS.addEventListener('mouseup', (event) => {
  drawing = false
})

function changeColor(newColor) {
  color = newColor
}

function draw(event) {
    CTX.beginPath()
    CTX.arc(event.clientX, event.clientY, 5, 0, 2 * Math.PI)
    CTX.fillStyle = color
    CTX.fill()
}