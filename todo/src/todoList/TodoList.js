import React from 'react';
import TodoItem from './TodoItem';
import './style.css';


const TodoList = ({ todoItems, toggleTodoItem }) => (
	<ul>
		{
			todoItems.map(({ checked, task, id }) => (
				<TodoItem
					key={id}
					checked={checked}
					task={task}
					toggle={() => { toggleTodoItem(id); }}
				/>
			))
		}
	</ul>

)


export default TodoList;