import React from 'react';

const Input = ( {handleChange, addTodoItem, value} ) => (
	<>
		<input
		type='text'
		value={value}
		onChange={handleChange}>
		</input>
		<button onClick={addTodoItem}>add task</button>
	</>
)

export default Input;