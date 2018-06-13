/** function add(x) {
  let sum = x;

  function f(y) {
    sum += y;
    return f;
  }

  f.toString = function(){
    return sum;
  }

  return f;
}


alert(add(2)(4))
**/

//bubling

/**
function bublingSort(arr) {
  let check;
  do {
    check = false;

    for (let i = 1; i < arr.length; i++) {
      let buffer = arr[i];
      
      if (arr[i] < arr[i - 1]) {
        arr[i] = arr[i - 1];
        arr[i - 1] = buffer;
        check = true;
      }
    }
  } while(check);
  return arr;
}

alert(bublingSort([3, 4, 1, 2]))
**/

//Дублирование элементов массива

/**
function double(arr, times) {
  let result = [arr];

  for(let i = 0; i < times; i++) {
    result = result.concat(arr);
  }
  return result;
}

arr = [1,2,3];
alert(double(arr, 5));
**/
function New(x,y) {}
