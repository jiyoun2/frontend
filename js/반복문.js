// for 반복문
for (let i = 0; i < 10; i++) { // i는 0이고, 10이 되기 전까지 반복, +1씩 증가(반복하는 조건)
    console.log('지금 현재 i 값은', i, '입니다.');
}

// while 반복문
let j = 0;
while (j < 10) {
    console.log('지금 현재 j값은', j, '입니다.')
    j++;
}

// do while 반복문
let k = 10;
do {
    console.log('지금 현재 k값은', k, '입니다.');
    k++;
} while (k < 10); // 조건은 10전까지만 반복이지만, 최초 1회는 출력됨.