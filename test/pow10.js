const timer = 'pow10';

function pow10(T = 9) {
  for(let x =0; x < T; x++) {
    const n = Math.pow(10, x);

    console.time(x.toString());
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += i;
    }
    console.timeEnd(x.toString());
  }
}

pow10(11);
