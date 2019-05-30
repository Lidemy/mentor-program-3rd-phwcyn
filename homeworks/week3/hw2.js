function alphaSwap(str) {
  console.log(str);
  let Str = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      Str += str[i].toUpperCase();
    } else {
      Str += str[i].toLowerCase();
    }
  }
  return Str;
}
module.exports = alphaSwap;
