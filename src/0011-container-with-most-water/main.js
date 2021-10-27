const mostWaterAreas = heightList => {
    let max = 0;
    for (let i = 0; i < heightList.length - 1; i++) {
        for (let j = i + 1; j < heightList.length; j++) {
            let area = (j - i) * Math.min(heightList[i], heightList[j]);
            max = Math.max(max, area);
        }
    }
    return max;
};

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// 左右边界，同时向中间收敛
const mostWaterAreas2 = heightList => {
    let max = 0;
    for (let i = 0, j = heightList.length - 1; i < j;) {
        let minHeight = heightList[i] < heightList[j] ? heightList[i++] : heightList[j--];
        console.log('minHeight', minHeight);
        let area = (j - i + 1) * minHeight;
        max = Math.max(max, area);
    }
    return max;
};

console.log(mostWaterAreas(arr));
console.log(mostWaterAreas2(arr));

