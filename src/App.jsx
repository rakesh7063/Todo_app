import { useState } from "react";
import TodoList from "./components/TodoList";


function App() {
	const [todos, setTodos] = useState([]);

	function handleFormSubmit(e) {
		e.preventDefault();

		const taskName = e.target.taskName.value;

		setTodos([...todos, {
			id: `${Math.ceil(Math.random() * 999)}-${taskName}`, // 285-SQL
			title: taskName,
			status: false
		}])

		e.target.taskName.value = "";
	}

	function editTodoStatus({ id, newStatus }) {
		if (typeof newStatus !== 'boolean') return alert("Invalid status!");

		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.status = newStatus;
			}
			return todo;
		}))
	}

	function editTodoTitle({ id, newTitle }) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.title = newTitle;
			}
			return todo;
		}))
	}

	function deleteTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id));
	}


	return (
		<>
			<div className="container">
				<h1>Todo App</h1>
				<form onSubmit={handleFormSubmit}>
					<input placeholder="Task name" type="text" id="taskName" required />
					<button type="submit">Add</button>
				</form>
			</div>
			<TodoList
				todoList={todos}
				editTodoStatus={editTodoStatus}
				editTodoTitle={editTodoTitle}
				deleteTodo={deleteTodo}
			/>
		</>
	);
}

export default App;
