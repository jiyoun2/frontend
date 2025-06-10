const a = 1;
const b = '1';
const c = 2;
const d = 1;

// 비교 연산자
console.log('a==b', a == b); // 숫자만 비교
console.log('a===b', a === b); // 타입까지 비교인듯?
console.log('a<c', a < c);
console.log('a>c', a > c);
console.log('a<=d', a <= d);
console.log('a>=d', a >= d);

// 증감 연산자
let e = 1;
e++; //++는 1을 더해줌
console.log(e);
e--; //--는 1을 빼줌
console.log(e);
console.log(++e);
// 콘솔로그에서 e++을 해주면 e의 값만 나옴. 다음 줄에서 +1된 갑이 출력. ++e를 해주면 +1이 된 e값을 출력. 순서대로 출력되는거

// 논리 연산자
console.log(a === b && a < c);
console.log(a === b || a < c);

// 부정 연산자
console.log(!false);
console.log(a !== b);
console.log(a != b);