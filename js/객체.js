const person = {
    name: '정지윤', // name 키값(고정값), '정지윤' value값
    age: 27,
    job: '개발자',
    hobbies: {
        hobby1: '개발공부',
        hobby2: '운동',
    },
};

// console.log(person.name);

// console.log(`안녕하세요. 저는 ${person.name}입니다. 저는 ${person.age}살이고, 직업은 ${person.job}입니다.
//     취미는 ${person.hobbies.hobby1}와 ${person.hobbies.hobby2}입니다.${person.talk(' 앞으로 잘 부탁드립니다.')}`);

// 옅은 복사
const person2 = { ...person};

console.log(person);

// 깊은 복사
const deepCopy = (person) => {
    const result = {}; // result를 상수로 선언
    for (let key in person) { //객체를 반복문 돌림
        if (typeof person[key] == 'object') { // 객체 안에 key값의 타입이 object인지 확인
            result[key] = deepCopy(person[key]); // 재귀함수(deepCopy)를 이용해 객체를 한번 더 반복돌려 깊은복사 한다
        } else {
            result[key] = person[key];
        }
    }
    return result;
};
const person4 = deepCopy(person);

console.log('깊은 복사', person4);

person4.name = '쥰'