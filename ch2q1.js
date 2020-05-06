/*
### Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

// Make Triangle

let makeTriangle = function (numberOfRows) {
  let pattern = ''
  
  for (let row = 0; row < numberOfRows; row = row + 1) {
    
    pattern = pattern + '#'
    console.log(pattern)
  }
}

makeTriangle(7)
