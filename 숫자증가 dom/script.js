// html dom요소 가져오기
const btn = document.getElementById('eventBtn');
const countDisplay = document.getElementById('count');

let count = 0;

// 버튼 이벤트
btn.addEventListener('click', function () {
    count += 1;
    countDisplay.textContent = count; // 화면에 반영
});