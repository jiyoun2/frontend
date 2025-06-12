// 레거시 키워드
var a = 1;
var a = 2; //재선언 가능

// 변수 생성 키워드 (재선언 불가, 재할당 가능)
let b = 1;
console.log('첫 b', b);

b = 2;
console.log('둘째 b', b);

b = 1;
console.log('셋째 b ', b)

// 상수 생성 키워드 (재선언 불가, 재할당 불가)
const c = 1;