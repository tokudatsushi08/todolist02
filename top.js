'user strict'

{
    const todos = [];
    const submitBtn = document.getElementById('submitBtn');
    const formInputSection = document.getElementById('formInput');
    const outputElem = document.getElementById('output');
    const radioBtn = document.getElementById('display');

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

    // todoを表示する処理

    const todoShow = function (todos) {

        while (outputElem.firstChild) {
            outputElem.textContent = '';
        };

        todos.forEach(function (todo) {
            const tr = document.createElement('tr');
            const idElem = document.createElement('td');
            const contentElem = document.createElement('td');
            const stateElem = document.createElement('td');
            const deleatBtnElem = document.createElement('td');
            id.idElem.textContent = todo.id;
            contentElem.textContent = todo.content;
            stateElem.appendChild(todo.stateBtn);
            deleatBtnElem.appendChild(todo.deleatBtn);
            outputElem.appendChild(tr);
            tr.appendChild(idElem);
            tr.appendChild(contentElem);
            tr.appendChild(stateElem);
            tr.appendChild(deleatBtnElem);
        })
    };

    // 作業中↔︎完了の表示を切り替える処理

    const swithBtn = function (stateBtn) {
        if (stateBtn.textContent === "作業中") {
            stateBtn.textContent = "完了";
        } else {
            stateBtn.textContent = "作業中";
        };

        for (let i = 0; i < radioBtn.children.length; i++) {
            if (radioBtn.children[i].checked === true) {
                chanegTodoDisplay(radioBtn.children[i].value);
                console.log(radioBtn.children[0].value);
            }
        }
    }


}