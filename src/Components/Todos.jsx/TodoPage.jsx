import { observer } from 'mobx-react';
import React from 'react';
import Todo from '../../Stors/Todo/Todo';

const TodosPage = observer( () => {
    return(
    <div>
        <button onClick={ () => Todo.fatchTo()}>Fatch To</button>
     {Todo.todos.map( t => 
         <div key={t.id}>
             <input type="checkbox" checked={t.complatate} onChange={() => Todo.complateTodo(t.id)}/>
             {t.title}
             <button onClick={() => Todo.removeTodo(t.id)}>X</button>
         </div>
     )}
    </div>
    )
})

export default TodosPage;