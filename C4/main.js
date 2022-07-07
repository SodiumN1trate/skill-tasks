let colors = [0, 0, 0]

function change(type) {
  colors[type] = document.getElementById('ranges').getElementsByTagName('input')[type].value
  var output = `rgb(${colors[0]},${colors[1]},${colors[2]})`
  document.getElementById('color_code').innerHTML = output
  document.getElementById('container').style.backgroundColor = output
}