const parentEl = document.getElementById('parent');
const childEl = document.getElementById('child');
const parentCountEl = document.getElementById('parentCount');
const childCountEl = document.getElementById('childCount');

let parentCount = 0;
let childCount = 0;

parentEl.addEventListener('click', () => {
    parentCount += 1;
    parentCountEl.textContent = parentCount;
});

childEl.addEventListener('click', (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    childCount += 1;
    childCountEl.textContent = childCount;
});