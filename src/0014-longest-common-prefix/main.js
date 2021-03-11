const longestCommonPrefix = strs => {
  strs.sort();
  let result = strs[0];

  for (let i = 0; i < strs.length; i++) {
    let j;
    for (j = 0; j < result.length && j < strs[i].length; j++) {
      if (result[j] !== strs[i][j]) {
        break;
      }
    }
    result = result.substring(0, j);
    if (result === '') {
      return result;
    }
  }
  return result;
};

// TODO

