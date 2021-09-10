// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    } 
    if (arr[i] <= min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = (sum / arr.length).toFixed(2);
  return {min:min, max:max, avg:Number(avg)};
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const iSum = func(arrOfArr[i]);
    if (iSum >= max) {
      max = iSum;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    } 
    if (arr[i] <= min) {
      min = arr[i];
    }
  }
  let difference = max - min;
  return difference;
}


