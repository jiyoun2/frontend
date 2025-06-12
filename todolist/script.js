const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const deleteBtn = document.getElementById('deleteBtn');

addBtn.addEventListener('click', () => {
    const inputText = todoInput.value.trim(); // trim()은 앞뒤 공백을 입력했을 때 공백을 없애줌
    if (inputText === "") { // 빈 값 검사. 아무것도 입력하지 않았을 경우 리스트를 추가하지 않음.
        return;
    };
    const li = document.createElement('li');
    li.innerHTML = `
        ${inputText}
         <button class='deleteBtn'>삭제</button>
        `;
    // todolist 추가
    todoList.appendChild(li);
    // todolist 삭제
    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    });
    // 초기화. 입력창을 빈칸으로 만들어 새로운 text 입력할 수 있게 함.
    todoInput.value = '';
});