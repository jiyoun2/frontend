console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000);

// async/await
const ws = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms)); // setTimeout은 일정 시간뒤에 출력되게함
}

const run = async () => {
    console.log('1');
    await ws(1000);
    console.log('2');
    await ws(1000);
    console.log('3');
}
// 위랑 같은 식인데, 위는 1,3,2 순으로, 아래는 1,2,3 순으로 나오는 식
// const ws = (msg, ms) => {
//     return new Promise((resolve) =>
//         setTimeout(() => {
//             console.log(msg);
//             resolve();
//         }, ms),)
// }

// run은 순서대로 실행. 1초후 1, 2초후 2, 1초후 3
// const run = async () => {
//     await ws('1', 1000);
//     await ws('2', 2000);
//     await ws('3', 1000);
// };

run();

