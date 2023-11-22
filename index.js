function hasTargetSum(array, target) {
  for(let i = 0; i<array.length; i++){
    for(let j=i+1; j < array.length; j++){
      if(array[i]+array[j]===target){
        return true
      }
    }
  }
  return false
}
// Write your algorithm here
/*
1)Take in array of numbers and our target number
2)let i and j itterate over the array by 1 
3)add i and j together to see if it is the target
4)return true or false based on the sum
*/




  //Write the Big O time complexity of your function here
/*
O(n)

*/ 
 // Add your pseudocode here
/*
hasTargetSum()takes in the array of numbers and target number:
i begins at 0 on the array and iterates array.length by i++:
j begins at i+1 and iterates array.length by j++:
if array i + array j is the target:  
return true
everything else is false

*/
  //Add written explanation of your solution here
  /*
  our function takes in the array of numbers, and the target number
  we are setting i's positon to 0 and moving it along the array by 1 each time
  we are doing the same with j but it will be 1 spot ahead on the array then i
  we then add both array i and j together to see if the sum is our target each time it iterates over the array
  and if so we return the value of true, if it is not our target number we return false. 
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
