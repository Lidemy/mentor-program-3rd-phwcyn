function stars(n) {
  const result = [];
  let star = '';
  for (let i = 0; i < n; i += 1) {
    star += '*';
    result.push(star);
  }
  return result;
}
console.log(stars(1));
console.log(stars(3));
console.log(stars(6));
module.exports = stars;
