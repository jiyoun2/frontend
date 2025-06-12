const array = [1, 2, 3, 4, 5];
// 숫자배열은 0부터 시작임.

const humansArray = ['홍길동', '김철수', '김지민'];

const objectArray = [
    {
        name: '홍길동',
    }, {
        name: '김철수',
    }, {
        name: '김지민',
    },
];

for (i = 0; i < 6; i++) {
    console.log(i)
};
// push 마지막 배열에 추가
array.push(6);
console.log(array);

// pop 마지막 배열을 삭제
array.pop();
console.log(array);

// unshift: 첫번째 배열에 추가
array.unshift(0);
console.log(array);

// shift 첫번째 배열을 삭제
array.shift();
console.log(array);

// splice: 배열 안에 원하는 위치에 추가/삭제
// 추가
array.splice(2, 0, 3); // (시작인덱스, 삭제할 개수, 추가값1, 추가값2)
console.log(array);
// 삭제
array.splice(2, 1);
console.log(array);

// slice 배열 일부를 복사한다
const slice = array.slice(0, 3); // 0번째부터 시작해서 3번째 이전의 숫자가 복사 0<3
console.log(slice);

// concat: 배열 합치기
const array2 = [6, 7, 8];
console.log(array.concat(array2)); // 1번 방법
console.log([...array, ...array2]); // 2번 방법

// indexof: 특정 값 위치(인덱스) 찾기
console.log(array.indexOf(3));
console.log(array.indexOf(100)); // 없는 값을 넣으면 '-1'이 출력됨

// includes: 배열 안에 값이 있는지 확인 (참, 거짓)
console.log(array.includes(3)); // 있으면 true
console.log(array.includes(100)); // 없으면 false

// map 조건에 따라 새로운 배열을 만들어 줌
const newArray = array.map((e) => e * 2);
console.log(newArray);

// filter 조건에 맞는 값만 추출. 새로운 배열로 만들어 줌
const filterArray = array.filter((e) => e % 2 === 1);
console.log(filterArray);

// find 조건에 맞는 첫번째 값만 반환
const findArray = array.find((e) => e % 2 === 0);
console.log(findArray);

// reduce 배열의 모든 값을 누적 계산
// reduce((누적값, 현재값) => { }):
const totalArray = array.reduce((acc, cur) => {
    return acc * cur;
});
console.log(totalArray);

// sort 배열을 순서대로 정렬
const nonSortArray = [100, 20, 4, 300];
const sortArray = nonSortArray.sort();  // 맨 앞 숫자 기준으로 오름차순 정렬됨
const realSortArray = nonSortArray.sort((a, b) => b - a);
console.log(realSortArray);

// 실습 0~100,101~200 배열을 만들어서 합친 후, 짝수만 필터링, 내림차순 정렬, 합계
const arrayA = [];

const arrayB = [];

for (let g = 0; g <= 100; g++) {
    arrayA.push(g);
}

for (let f = 101; f <= 200; f++) {
    arrayB.push(f);
}
// console.log(arrayA.concat(arrayB));
const oneCombo = arrayA
    .concat(arrayB)
    .filter((e) => e % 2 === 0)
    .sort((a, b) => b - a)
    .reduce((acc, cur) => {
        return acc + cur;
    });
console.log(oneCombo);

// length 배열의 길이 계산
console.log(array.length);
for (let i = 0; i < humansArray.length; i++) {
    console.log(humansArray[i]);
}

// value of array; data부분은 원하는걸로(한글도 가능하지만 잘 안씀)
for (const data of array) { // in이랑 of 차이는???
    console.log(data);
}

// foreach (데이터값, 순서(숫자로 보여줌) index 안쓰면 데이터만 불러옴
humansArray.forEach((data, index) => {
    console.log(data, index);
});

// map활용
const newArrayy = array.map((data, index) => {
    console.log(data, index);
    return data * 2;
});
console.log(newArrayy);

const scores = [85, 90, 50, 58, 92, 82, 61, 45, 70, 74];
const newScores = [];

// for (const score in scores) {
//     if (scores >= 60)
//         newScores.push(score);
// }
scores.forEach((score) => {
    if (score >= 60) {
        newScores.push(score);
    };
});
const totalScore = newScores.reduce((acc, cur) => {
    return acc + cur;
});
const average = totalScore / newScores.length;
console.log(average);