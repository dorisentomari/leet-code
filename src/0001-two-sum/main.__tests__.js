const main = require('./main');

describe('测试两数之和', () => {
    test('开始测试', () => {
        const {twoSum1, twoSum2} = main;
        expect(twoSum1([0, 1, 2, 3, 6], 5)).toEqual([2, 3]);
        expect(twoSum2([0, 1, 2, 3, 6], 5)).toEqual([2, 3]);
        expect(twoSum1([0, 1, 2, 3, 6], 10)).toEqual([]);
        expect(twoSum2([0, 1, 2, 3, 6], 10)).toEqual([]);
        expect(twoSum2([], 10)).toEqual([]);
    });
});
