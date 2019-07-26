import React from 'react';

const TodoItem = ({ checked = false, task = 'Learn React', toggle }) => (
	<li>
		<input type='checkbox' checked={checked} onChange={toggle} />
		<span>{task}</span>
	</li>
);

export default TodoItem;