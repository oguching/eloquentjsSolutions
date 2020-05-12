// Lists

function arrayToList(arrayValue) {
  let list = null
 
  for (let i = arrayValue.length - 1; i >= 0 ; i--){
    list = {value: arrayValue[i], rest: list} 
  }
  
  return list  
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

/* this is as far as I can go. 
** can't seem to wrap my head around lists, how they work etc.
*/
