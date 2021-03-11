const palindromeNumber1 = num => {
  const str = num.toString().split('').reverse().join('');
  return num.toString() === str;
};

const palindromeNumber2 = num => {
  if (num < 0) {
    return false;
  }

  const str = num.toString();

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const palindromeNumber = num => {
  if (num < 0) {
    return false;
  }

  const original = num;
  let reverse = 0;
  while (num > 0) {
    reverse = reverse * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return original === reverse;
};


console.log(palindromeNumber(12345));
// console.log(palindromeNumber(121));
// console.log(palindromeNumber(0));

