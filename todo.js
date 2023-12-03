'use strict'
{
    let todos;
    

    ///ローカルストレージに保存されている場合は登録されている値を取得する
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    

    const renderTodo=(todo)=>{
        //ul要素の中身を形成する
        const input = document.createElement('input');
        input.type='checkbox';
        input.checked=todo.isCompornented;
        input.addEventListener('change',()=>{
            todos.forEach((item)=>{

            if(item.id===todo.id){
                item.isCompornented=!item.isCompornented;
            }
            });
            localStorage.setItem('todos',JSON.stringify(todos));
        });
        const span=document.createElement('span');
        span.textContent=todo.title;
        const label =document.createElement('label')
        label.appendChild(input);
        label.appendChild(span);
        const button =document.createElement('button');
        button.textContent='x';

        //削除用のbuttonがクリックされた際にconfirmを出力して確認をとる
        button.addEventListener('click',()=>{
            if(confirm('sure')===false){
                return;
            }
            li.remove();
            todos=todos.filter((item)=>{
                return item.id!==todo.id;
            });
            localStorage.setItem('todos',JSON.stringify(todos));
        })



        const li =document.createElement('li');
        li.appendChild(label);
        li.appendChild(button);
        document.querySelector('#todos').appendChild(li);
    };


    //登録されたタスクをforEachを利用して繰り返し出力を行う
    const renderTodos=()=>{
        todos.forEach((todo) =>{
            renderTodo(todo);
        });
    };


    //タスクを追加する
    document.querySelector('#add-form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const input=document.querySelector('#add-form input');
        const todo={
            id:Date.now(),
            title:input.value,
            isCompornented:false,
        };
        
        //再読み込みをした場合でもローカルストレージから削除する
        renderTodo(todo);
        todos.push(todo);
        console.table(todos);
        localStorage.setItem('todos',JSON.stringify(todos));
        input.value='';
        input.focus();
    });

    document.querySelector('#parge').addEventListener('click',()=>{
        if(confirm('sure?')===false){
            return;
        }
        todos=todos.filter((todo)=>{
            return todo.isCompornented===false;
        });
        localStorage.setItem('todos',JSON.stringify(todos));
        document.querySelectorAll('#todos li').forEach ( (li)=>{
            li.remove();
        });
        renderTodos();
    });

    
    renderTodos();

    ///ローカルストレージにとろくする流れ
    localStorage.setItem('todos',JSON.stringify(todos));
    console.log(JSON.parse(localStorage.getItem('todos')));
}
    















