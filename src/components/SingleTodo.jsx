import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import styles from '../styles/singleTodo.module.css';

function SingleTodo({ todo: { id, title, status }, editTodoStatus, editTodoTitle, deleteTodo }) {
     const [editMode, setEditMode] = useState(false);

     function handleStatusChange(e) {
          const newStatus = e.target.checked;
          editTodoStatus({ id, newStatus });
     }

     function handleTitleUpdate(e) {
          e.preventDefault();
          const newTitle = e.target.todoTitle.value;

          if (newTitle !== title) editTodoTitle({ id, newTitle })

          setEditMode(false);
     }

     return (
          <div className={styles[`single-todo`]}>
               {
                    editMode ? <>
                         <form onSubmit={handleTitleUpdate}>
                              <input type="text" id='todoTitle' defaultValue={title} required />
                              <button type="submit">Save</button>
                         </form>

                    </>
                         : <h3
                              className={styles[`todo-name`]}
                              style={{
                                   textDecoration: status ? "line-through" : "none",
                                   color: status ? "gray" : "#fff",
                              }}
                         >{title}</h3>
               }

               {
                    !editMode && <div>
                         {
                              !status && <FaEdit
                                   className={styles[`todo-edit-btn`]}
                                   onClick={() => setEditMode(true)}
                              />
                         }

                         <input className={styles[`todo-status-checkbox`]} type="checkbox" id={id} defaultChecked={status} onChange={handleStatusChange} />
                         <label className={styles[`todo-status-label`]} htmlFor={id}></label>

                         <MdDelete
                              className={styles[`todo-delete-btn`]}
                              onClick={() => deleteTodo(id)}
                         />

                    </div>
               }
          </div>
     )
}

export default SingleTodo