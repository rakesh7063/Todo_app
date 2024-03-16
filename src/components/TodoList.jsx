import React from 'react';
import SingleTodo from './SingleTodo';
import styles from '../styles/todoList.module.css';

function TodoList({ todoList, editTodoStatus, editTodoTitle, deleteTodo }) {
     return (
          <div className={styles[`todo-list`]}>
               {
                    todoList.map(todo => <SingleTodo
                         key={todo.id}
                         todo={todo}
                         editTodoStatus={editTodoStatus}
                         editTodoTitle={editTodoTitle}
                         deleteTodo={deleteTodo}
                    />)
               }
          </div>
     )
}

export default TodoList