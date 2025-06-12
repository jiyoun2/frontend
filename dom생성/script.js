// html dom요소 가져오기
const btn = document.getElementById('eventBtn');
const countDisplay = document.getElementById('container');

let count = 0;

// 버튼 이벤트
btn.addEventListener('click', function () {
    count += 1;
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.textContent = 'count';
    container.appendChild(newDiv); 
});
// appendChild: html의 container밑에 newDiv를 계속 생성하겠다