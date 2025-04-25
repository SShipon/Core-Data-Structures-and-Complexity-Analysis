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


// number 2 problem Find sum of array 

function findSum(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

//console.log( findSum([1, 3, 5, 2, 9]))


// number 3 problem Binary Search 
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  //console.log( binarySearch([1, 3, 5, 2, 9]))


// number 4 problem bubble Sort 
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }

    //console.log(  bubbleSort([1, 3, 5, 2, 9]))

    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
      }

    //console.log( fibonacci([1, 3, 5, 2, 9]))


    // number 6 problem Dynamic Programming 

    function fibonacciDP(n){
          let dp = [0, 1]
          for(let i= 2; i<= n; i++){
            dp[1]=  dp[i-1] + dp[i-2];
          }
          return dp[n]
    }


     //console.log( fibonacciDP([1, 3 ,7]))
    




     // number 7 problem factorial recursive 

     function factorialDB(n){
         if(n === 0) return 1;
         return n * factorialDB(n -1)
     }

   //console.log( factorialDB([3, 1, 4,6, 2]))




// problem number 8 linear Search  

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }

//console.log(linearSearch([1,6,9,8]))

//proleme 9 number Palindrome  
function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

console.log(isPalindrome([2, 6, 78, 65, 15, 12, 3, 8]))

//proleme 9 number  merge tow sorted arrays  
  function mergeArrays(arr1, arr2) {
    let merged = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  }


  console.log(mergeArrays([]))