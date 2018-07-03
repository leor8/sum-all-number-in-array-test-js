let anArr = [[1, 2, [[3], 4]], 5, []];


function sumItems(array) {
  let sum = 0;
  // Sum all the numbers in the array
  for (item of array) {
    if(Array.isArray(item)){
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }

  return sum;
}

// sumItems(anArr);
console.log(sumItems(anArr));

module.exports = sumItems;