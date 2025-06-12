const a = 1;
console.log(typeof a); // 무슨 타입인지 모르겠을 때 typeof를 이용해 확인 가능
console.log(typeof a.toString()); // 타입을 String으로 바꿀 수 있음

// ''가 있으면 문자형.
const b = '1';
console.log(typeof b);
console.log(b === String(a));

const c = 2n; // 2^53 -1보다 큰 값 = bigint
console.log(typeof c);

const d = true;
console.log(typeof d);

const e = null; // null과 undefined는 비슷한데, null은 0, undefined [] 느낌.
console.log(typeof e);

const f = undefined; // = ; 아무것도 안쓴거랑 같음
console.log(typeof f);

const g = NaN; // Not a number
console.log(typeof g);

const h = Infinity; // 무한대
console.log(typeof h);

const i = {}; // object 객체
console.log(typeof i);
