
//Задача1
function compareArrays(arr1, arr2) {
  let result = ((arr1.lenght === arr2.lenght) && (arr1.every((item, index) => item === arr2[index])));
  return result; // boolean
}


//Задача2
function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);
  return resultArr; // array
}
