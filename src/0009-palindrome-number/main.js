/*
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
**/

function palindromeNumber1(num) {
    const str = num.toString().split('').reverse().join('');
    return num.toString() === str;
}

function palindromeNumber2(num) {
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
}

function palindromeNumber(num) {
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
}


console.log(palindromeNumber(12345));
// console.log(palindromeNumber(121));
// console.log(palindromeNumber(0));

