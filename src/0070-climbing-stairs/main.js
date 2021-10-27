const climbStairs = n => {
    if (n <= 2) {
        return n;
    }

    let f1 = 1, f2 = 2, f3 = 3;

    for (let i = 3; i < n + 1; i++) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return f3;

};

/*
* n = 1. 结果为 1 种，[1]
* n = 2. 结果为 2 种，[1, 1] 或 [2]
* n = 3. 结果为 3 种，[1, 1, 1] 或 [1, 2] 或 [2, 1]
* n = 4. 结果为 5 种，[1, 1, 1, 1] 或 [1, 2, 1] 或 [1, 1, 2] 或 [2, 1, 1] 或 [2, 2]
* 本质上是一个斐波那契数列
* */
