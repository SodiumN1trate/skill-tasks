const CANVAS = document.getElementById('canvas')
const CTX = CANVAS.getContext('2d')

let x = 0

function render() {
  if(x <= 400) {
    setTimeout(() => {
      CTX.beginPath()
      CTX.clearRect(0, 0, 400, 320);
      CTX.arc(x, 160, 10, 0, 2 * Math.PI)
      CTX.fillStyle = 'white'
      CTX.fill()
      CTX.closePath()
      x+=1
      render()
    }, 10);
  }
}

render()