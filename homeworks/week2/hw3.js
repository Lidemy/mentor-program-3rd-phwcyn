function reverse(str) {
  let reversestr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversestr += str[i];
  }
  console.log(reversestr);
  return reversestr;
}

reverse('hello');
