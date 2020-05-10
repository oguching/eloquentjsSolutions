// countBs

/*
** Write a function countBs that takes a string as its only argument 
** and returns a number that indicates how many uppercase “B” characters 
** there are in the string.
**
** Next, write a function called countChar that behaves like countBs, 
** except it takes a second argument that indicates the character that
** is to be counted (rather than counting only uppercase “B” characters). 
** Rewrite countBs to make use of this new function.
*/

function countBs(strInput){
  let counter = countChar(strInput, 'B') 
  
  console.log(`There are ${counter} in ${strInput}` )
  
}

function countChar(strInput, strChar) {
  let strLength = strInput.length
  let strCharCounter = 0
   // loop through each character check if character is a B
  for (let character = 0; character < strLength; character++){
    if (strInput[character] == strChar) {
      strCharCounter = strCharCounter + 1
    }
  }
  
  return strCharCounter
}

countBs('Boogle')
