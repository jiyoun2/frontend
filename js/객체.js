const person = {
    name: '정지윤', // name 키값(고정값), '정지윤' value값
    age: 27,
    job: '개발자',
    talk: (sentense) => {
        return(sentense);
    },
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
const deepCopy = (origin) => {
    const result = {};
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] == 'object') {
            result[key] = deepCopy(origin[key]);
        } else {
            result[key] = origin[key];
        }
    }
    return result;
};
const person4 = deepCopy(person);

console.log('깊은 복사', person4);

person4.name = '쥰'