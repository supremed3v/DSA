function binarySearch(arr, target){
  // Pointers
  let startIndex = 0;
  let endIndex = arr.length - 1
  
  while(startIndex <= endIndex){
    let middleIndex = Math.floor((startIndex + endIndex) / 2)
    if(target === arr[middleIndex]){
      return middleIndex
    }
    if(target < arr[middleIndex]){
      endIndex = middleIndex - 1
    } else {
      startIndex = middleIndex + 1
    }
  }
  return -1 
}

console.log(binarySearch([-5, 3, 5, 10, 20], 3)) // 3
console.log(binarySearch([-5, 3, 5, 10, 20], 20)) // 
console.log(binarySearch([-5, 3, 5, 10, 20], 21))

// Big-O = O(logn)