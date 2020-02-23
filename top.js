'user strict'

{
    const todos = [];
    const submitBtn = document.getElementById('submitBtn');
    const formInputSection = document.getElementById('formInput');

    submitBtn.addEventListener('click', function () {
        addTodo();
    });

    // todoを追加する処理
    const addTodo = function () {
        const content = formInputSection.value;
        if (!content) {
            alert('todoを追加してください');
        }
        const stateBtn = document.createElement('button');
        const deleatBtn = document.createElement('button');
        stateBtn.textContent = "作業中";
        stateBtn.classList.add('state_btn');
        deleatBtn.classList.add('delete_btn');
        deleatBtn.textContent = "削除";
        const todo = {
            id: '',
            content,
            stateBtn,
            deleatBtn
        };

        todos.push(todo);
        console.log(todos);

        todos.forEach(function (todo, index) {
            todo.id = index + 1;
        })
    }
}