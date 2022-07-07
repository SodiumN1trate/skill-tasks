let capslock = false
let shift = false
let special = ['Tab', 'Backspace', 'CapsLock', 'Shift']


document.addEventListener('keydown', (event) => {  
  console.log(event)
  capslock = event.getModifierState('CapsLock')
  document.querySelectorAll('#keyboard > div > span').forEach((key) => {
    if(capslock && !special.includes(key.innerHTML)) {
      key.innerHTML = key.innerHTML.toUpperCase()
    } else if (capslock === false && !special.includes(key.innerHTML)) {
      key.innerHTML = key.innerHTML.toLowerCase()
    }
    if(key.innerHTML === event.key) {
      key.style.backgroundColor = 'yellow'
    }
  })
})

document.addEventListener('keyup', (event) => {
  document.querySelectorAll('#keyboard > div > span').forEach((key) => {
    if(key.innerHTML === event.key) {
      key.style.backgroundColor = 'white'
    }
  })
})

document.querySelectorAll('#keyboard > div > span').forEach((key) => {
  key.addEventListener('click', () => {
    if(key.innerHTML === 'Shift') {
      shift = !shift
      key.style.backgroundColor = (shift) ? 'yellow' : 'white'
    }
    if(key.innerHTML === 'CapsLock') {
      capslock = !capslock
      key.style.backgroundColor = (capslock) ? 'yellow' : 'white'
    }
    if(key.innerHTML === 'Backspace') {
      document.getElementById('text').innerHTML = document.getElementById('text').innerHTML.slice(0, -1) 
    }
    if(!special.includes(key.innerHTML)) {
      document.getElementById('text').innerHTML += (shift || capslock) ? key.innerHTML.toUpperCase() : key.innerHTML.toLowerCase()
    }
  })
})