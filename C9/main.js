const ADD_BUTTON = document.getElementById('add-button')
const SPENDING_NAME = document.getElementById('spending-name')
const COST = document.getElementById('cost')

ADD_BUTTON.addEventListener('click', () => {
  if(COST.value && SPENDING_NAME.value) {
    document.getElementById('message').innerHTML = 'Correct!'
    document.getElementById('list').innerHTML += `<li>${SPENDING_NAME.value} - ${COST.value}</li>`
    setTimeout(function() {
      document.getElementById('message').innerHTML = ''
        SPENDING_NAME.value = ''
        COST.value = ''
    }, 3000);
  } else {
      document.getElementById('message').innerHTML = 'There was an error!'
      setTimeout(function() {
        document.getElementById('message').innerHTML = ''
        SPENDING_NAME.value = ''
        COST.value = ''
      }, 3000);
  }
})