const a = 1;
const b = 10;
const c = 100;

// 기본 함수 선언식. 함수식에 대입해주고 return으로 결과 출력.
function funtionName(x, y) { // functionname부분은 원하는 함수 이름 넣어주면 됨. 함수 만들어줌
    return x + y;
}
console.log(funtionName(a, b));

// 화살표 함수 선언식. 빈용
const arrowFunction = (x, y) => {
    return x * y;
};
console.log(arrowFunction(c, b));