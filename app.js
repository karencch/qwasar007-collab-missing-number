let nums = [9,6,4,2,3,5,7,0,1];

function missingNumber(nums){
  let numsSorted = nums.sort();

  for (let i=0; i<nums.length; i++){
    if (numsSorted.indexOf(i) !== numsSorted[i]){
      return i;
    }
  }
}

console.log(missingNumber(nums));
