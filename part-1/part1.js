//  number 1 problem find maximum element in array 
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
 //console.log( findMax([1, 3, 5, 2, 9]))
 // time complexity : o(n)
 // space complexity : o(1)


// number 1 problem Find sum of array 

function findSum(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

//console.log( findSum([1, 3, 5, 2, 9]))
// time complextiy: o(n)
// space complexity : o(1)