/* 
** For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
** The first, reverseArray, takes an array as argument and produces a new array 
** that has the same elements in the inverse order. The second, reverseArrayInPlace,
** does what the reverse method does: it modifies the array given as argument by 
** reversing its elements. Neither may use the standard reverse method.
*/

let arrayValue = [ 5, 4, 3, 2, 1]

function reverseArray(anArray) {
  let reversedArray = []
  
  for (element of anArray) {
    reversedArray.unshift(element)
  }
  
  return reversedArray
}

// we modify the array and return the modified array
function reverseArrayInPlace(arrayValue) {
  let temp = null, 
      arrayLength = arrayValue.length
  
 for ( let i = 0; i < arrayLength; i++) {
   temp = arrayValue[i]
   arrayValue[i] = arrayValue[--arrayLength]
   arrayValue[arrayLength] = temp
   
 }
  return arrayValue
}

console.log(reverseArrayInPlace(arrayValue))
console.log(reverseArray([5, 4, 3, 2, 1]))
