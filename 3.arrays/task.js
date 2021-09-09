
//Задача1
function compareArrays(arr1, arr2) {
  return result = ((arr1.length === arr2.length) && (arr1.every((item, index) => item === arr2[index])));
}


//Задача2
function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);
  return resultArr; // array
}
