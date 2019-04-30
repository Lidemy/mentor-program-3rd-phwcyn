function join(arr, concatStr) {
  let tmp = '';
  tmp += arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    tmp += concatStr + arr[i];
  }
  return tmp;
}

function repeat(str, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}
console.log(join([1, 2, 3], ''));
console.log(join('a', '!'));
console.log(repeat('a', 5));
