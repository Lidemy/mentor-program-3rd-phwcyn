function capitalize(str) {
  const result = str.split('');
  result[0] = result[0].toUpperCase();
  return result.join('');
}
console.log(capitalize('hello'));
