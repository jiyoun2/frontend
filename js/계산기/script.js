const display = document.getElementById('display'); // 값이 보이는 곳(input태그)
const buttons = document.querySelectorAll('button'); // 모든 버튼

let current = '' // 현재값
let operator = '' //연산값
let prev = '' //이전값

buttons.forEach((btn) => { // 가져온 button들을 반복문으로 돌린다
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        if (value === 'C') { // C버튼 눌렀을 때 초기화
            current = ''; 
            prev = ''; 
            operator = '';
            display.value = '';
        } else if (['+', '-', 'x', '/'].includes(value)) { // 연산버튼 눌렀을 때
            if (current==='') { // 현재값이 없다면 정지
                return;
            };
            operator = value; // 연산값을 operator에 넣어줌
            prev = current; // 현재값을 이전값에 적용
            current = ''; // 현재값을 빈 문자열로 적용
        } else if (value === '=') {
            if (operator === '' || current === '' || prev === '') {
                // 현재값이 없으면 정지. if (!operator||!current||!prev) 해도 똑같음
                return;
            }
            const a = parseFloat(prev); // 이전값이 문자열이므로 숫자열로 변환
            const b = parseFloat(current); // 현재값이 문자열이므로 숫자열로 변환
            let result = 0; // 계산할 값의 초기값

            // 연산값이 +-x/일 때
            if (operator === '+') {
                result = a + b;
            } else if (operator === '-') {
                result = a - b;
            } else if (operator === 'x') {
                result = a * b;
            } else if (operator === '/') {
                result = a / b;
            };
            // 위랑 동일한 조건문. if나 switch 조건문 사용하기
            // switch (operator) {
            //     case '+':
            //         result = a + b;
            //         break;
            //     case '-':
            //         result = a - b;
            //         break;
            //     case 'x':
            //         result = a * b;
            //         break;
            //     case '/':
            //         result = a / b;
            //         break;
            // };
            display.value = result; // input 태그에 result값을 넣어준다
            current = result.toString(); 
            operator = '';
            prev = '';
        } else {
            current += value;
            display.value = current;
        }
    });
});