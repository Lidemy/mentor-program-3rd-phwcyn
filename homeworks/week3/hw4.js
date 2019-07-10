function parlindrome(str) {
  return str === str.split('').reverse().join('');
}
module.exports = parlindrome;
