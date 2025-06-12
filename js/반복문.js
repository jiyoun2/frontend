// for 반복문
for (let i = 0; i < 10; i++) { // i는 0이고, 10이 되기 전까지 반복, +1씩 증가(반복하는 조건)
    // for (let i = 0; i < 10; i += 2); // 2배수로 증가함
    console.log('지금 현재 i 값은', i, '입니다.');
}

// while 반복문
let j = 10;
while (j < 10) {
    console.log('지금 현재 j값은', j, '입니다.')
    j++;
} // 10미만까지이므로 실행 안됨

// do while 반복문
let k = 10;
do {
    console.log('지금 현재 k값은', k, '입니다.');
    k++;
} while (k < 10); // 조건은 10전까지만 반복이지만, 최초 1회는 출력됨(do).

const person = {
    name: '쥰',
    age: 27,
    job: '개발자',
};
for (key in person) {
    console.log(key);
    console.log(person[key]);
};
for (key in person) { // 'person' 안의 값을 'key'로 가져오겠다.
    if (key === 'age') {
        if (person[key] < 30) {
            console.log('30살 미만인 사람')
        };
    };
};

for (key in person) {
    console.log('키 값', key);
    console.log('value값', person[key]);
};

const persons = {
    홍길동: {
        age: 29,
        job: '개발자',
        sex: '남',
        height: 180,
    },
    홍지민: {
        age: 27,
        job: '학생',
        sex: '여',
        height: 165,
    },
    홍동길: {
        age: 35,
        job: '선생님',
        sex: '남',
        height: 174,
    },
};

for (i in persons) {
    for (j in persons[i]) {
        if (j === 'age' && persons[i][j] < 30) {
            console.log('30살 미만인 사람', i);
        };
    };
};

// 실습: 나이 30살 미만, 여자인 사람.
for (k in persons) {
    // 1번답
    if ((persons[k].age < 30) && (persons[k].sex === '여')) { // '.하위경로'or[하위경로]
        console.log('30살 미만인 여자사람은', k); 
        };

    // 2번답
    if (persons[k].age < 30 && persons[k].sex === '여') {
        console.log(k, "은 30세미만 여자입니다.");
    };
};