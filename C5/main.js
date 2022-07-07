let array = [1, 2, 3, 4, 5]
let sum = 0
array.forEach((element) => {
  sum += (element % 2 != 0) ? element**2 : 0
})
console.log(`Summa ${sum}`)