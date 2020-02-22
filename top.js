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

    radioBtn.addEventListener('change', function (event) {
        changeTodoDisplay(event.target.value);
    });

    // todoを追加する処理
    const addTodo = function () {
        const content = formInputSection.value;
        if (!content) {
            alert('todoを追加してください');
        }
        const stateBtn = document.createElement('button');
        const deleatBtn = document.createElement('button');
        stateBtn.classList.add('state_btn');
        deleatBtn.classList.add('delete_btn');
        stateBtn.textContent = "作業中";
        stateBtn.addEventListener('click', function () {
            swithBtn(stateBtn);
        });
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
        deleatBtn.addEventListener('click', function () {
            const index = todos.indexOf(todo);
            deleatTodo(index);
        });

        for (let i = 0; i < radioBtn.children.length; i++) {
            if (radioBtn.children[i].checked === true) {
                changeTodoDisplay(radioBtn.children[i].value);
            };
        };

        formInputSection.value = '';
    };

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
            idElem.textContent = todo.id;
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
                changeTodoDisplay(radioBtn.children[i].value);
                console.log(radioBtn.children[i].value);
            }
        }
    }

    // radioボタンでの切り替え
    const changeTodoDisplay = function (radioBtnState) {
        console.log(radioBtnState);
        if (radioBtnState === 'all') {
            todoShow(todos);
        };
        if (radioBtnState === 'working') {
            const filterTodo = todos.filter(function (todo) {
                return todo.stateBtn.textContent === "作業中";
            });
            todoShow(filterTodo);
            console.log(filterTodo);
        };
        if (radioBtnState === 'complete') {
            const filterTodo = todos.filter(function (todo) {
                return todo.stateBtn.textContent === "完了";
            })
            todoShow(filterTodo);
        };
    }

    // 削除する処理を追加
    const deleatTodo = function (index) {
        todos.splice(index, 1);
        todos.forEach(function (todo, index) {
            todo.id = index + 1;
        })
        for (let i = 0; i < radioBtn.children.length; i++) {
            if (radioBtn.children[i].checked === true) {
                changeTodoDisplay(radioBtn.children[i].value);
            };
        };
    };

}