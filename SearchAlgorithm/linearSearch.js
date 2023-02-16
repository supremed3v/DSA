function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([-5, 3, 5, 10, 20], 10))
console.log(linearSearch([-5, 3, 5, 10, 20], -5))
console.log(linearSearch([-5, 3, 5, 10, 20], 21))