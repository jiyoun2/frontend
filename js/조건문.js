const a = 1;
const b = 2;
const c = 1;

// if 조건문
// 맨 위 조건문부터 검증함. 여러 개가 참이면 맨 위 결과가 나옴
if (a === b) { // 조건
    console.log('조건문 안에 들어옴'); // 조건이 맞을 경우 출력될 것
} else if (a > b) {
    console.log('첫번째 조건이 달라서 여기로 옴');
} else if (a !== b) {
    console.log("ddd");
} else { // else는 마지막에 씀. 모든 조건이 해당이 안될 때 출력될 것
    console.log("");
}


// 삼항 연산자 참이면 앞에거, 거짓이면 뒤에거가 출력되나봄
const result = a === b ? 'a와 b는 같습니다' : 'a와 b는 다릅니다';

// switch 문
switch (a) {
    case b:
        console.log('a는 b와 같습니다');
        break;
    case c:
        console.log('a는 c와 같습니다');
        break;
    default:
        console.log('a는 b나 c와 같지 않습니다');
}