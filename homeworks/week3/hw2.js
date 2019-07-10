function alphaSwap(str) {
  console.log(str);
  let STR = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      STR += str[i].toUpperCase();
    } else {
      STR += str[i].toLowerCase();
    }
  }
  return STR;
}
module.exports = alphaSwap;
