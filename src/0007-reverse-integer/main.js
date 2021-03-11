const reverseInteger1 = num => {
  let isMinus = false;
  if (num < 0) {
    isMinus = true;
  }

  num = Math.abs(num);
  let result = '';
  const numStr = String(num);
  for (let i = numStr.length - 1; i >= 0; i--) {
    result += numStr[i];
  }
  result = Number(result);
  result = isMinus ? -result : result;
  if (result > ((2 ** 31) - 1) || result < -(2 ** 31)) {
    return 0;
  }
  return result;
};

const reverseInteger2 = num => {
  let result = 0;
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const MIN_VALUE = -Math.pow(2, 31);

  while (num !== 0) {
    let pop = num % 10;
    result = result * 10 + pop;
    num = parseInt(num / 10);
  }
  if (result > MAX_VALUE || result < MIN_VALUE) {
    return 0;
  }
  return result;
};
